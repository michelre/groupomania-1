const db = require('../models');
const Post = db.post;
const Like = db.like;
const fs = require('fs');
const { getUserIdFromToken, getRoleFromToken } = require('../middleware/auth');

/*logique metier des routes post*/
exports.createPost = (req, res, next) => {
  const postObject = req.body;
  delete postObject.id;
  let imageUrl = '';
  if (req.file) {
    imageUrl = `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`;
  }
  const post = new Post({
    ...postObject,
    imageUrl,
    userId: getUserIdFromToken(req),
  });
  post
    .save()
    .then(() => res.status(201).json({ message: 'Post enregistré!' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllPosts = (req, res, next) => {
  const userId = getUserIdFromToken(req);
  const role = getRoleFromToken(req);
  Post.findAll({
    order: [['createdAt', 'DESC']],
    raw: true,
    nest: true,
    include: [{ model: db.user }],
  })
    .then((posts) => {
      const mappedPosts = posts.map(async (post) => {
        const likes = await Like.count({ where: { postId: post.id } });
        const userLiked = await Like.count({
          where: { postId: post.id, userId },
        });
        return {
          ...post,
          modifiable: post.userId === userId || role === 1,
          likes,
          userLiked: userLiked > 0,
        };
      });
      Promise.all(mappedPosts).then((posts) => res.status(200).json(posts));
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.likePost = (req, res, next) => {
  const user_Id = getUserIdFromToken(req);
  const post_Id = req.params.id;
  Like.findOne({
    where: { userId: user_Id, postId: post_Id },
  })
    .then((response) => {
      if (response) {
        Like.destroy(
          { where: { userId: user_Id, postId: post_Id } },
          { truncate: true, restartIdentity: true }
        ).then(() => {
          Like.count({ where: { postId: post_Id } }).then((likes) => {
            res.status(200).json({ likes, userLiked: false });
          });
        });
      } else {
        Like.create({ userId: user_Id, postId: post_Id }).then(() => {
          Like.count({ where: { postId: post_Id } }).then((likes) => {
            res.status(200).json({ likes, userLiked: true });
          });
        });
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Erreur serveur' });
    });
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyPost = (req, res, next) => {
  const authUserId = getUserIdFromToken(req);
  const role = getRoleFromToken(req);
  Post.findOne({ where: { id: req.params.id } })
    .then((p) => {
      if (p.userId === authUserId || role === 1) {
        let newPost = { ...req.body };
        if (req.file) {
          const filename = p.imageUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`, () => {
            newPost = {
              ...newPost,
              imageUrl: `${req.protocol}://${req.get('host')}/images/${
                req.file.filename
              }`,
            };
          });
          const post = {
            ...newPost,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${
              req.file.filename
            }`,
          };
          p.update(post);
          p.save(post);
        }
        const post = { ...newPost };
        p.update(post);
        p.save(post)
          .then(() => res.status(200).json({ message: 'Post modifié!' }))
          .catch((error) => res.status(400).json({ error }));
      } else {
        res.status(403).end();
        return;
      }
    })
    .catch((error) => {
      res.status(404).json({ status: 'KO', error: error });
    });
};

exports.deletePost = (req, res, next) => {
  const authUserId = getUserIdFromToken(req);
  const role = getRoleFromToken(req);
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      if (post.userId === authUserId || role === 1) {
        const filename = post.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Post.destroy({ where: { id: req.params.id } })
            .then(() => res.status(204).end())
            .catch((error) => res.status(400).json({ error }));
        });
      } else {
        res.status(403).end();
        return;
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
