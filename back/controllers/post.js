const db = require('../models');
const Post = db.post;
const User = db.user;
const Like = db.like;
const fs = require('fs');
const { getUserIdFromToken, getRoleFromToken } = require('../middleware/auth');
const { post } = require('../models');

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
  /**
   * TODO: Remonter le fait que l'utilisateur ait déjà liké le post
   */
  const userId = getUserIdFromToken(req);
  const role = getRoleFromToken(req);
  Post.findAll({
    order: [['createdAt', 'DESC']],
    raw: true,
    nest: true,
    include: [{ model: db.user }],
  })
    .then((posts) => {
      const mappedPosts = posts.map((post) => {
        return {
          ...post,
          modifiable: post.userId === userId || role === 1,
        };
      });
      res.status(200).json(mappedPosts);
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
  console.log(user_Id);
  console.log(post_Id);
  /* try {
    Like.findOne({ where: { userId: user_Id, postId: post_Id } }).then(() => {
      Like.destroy(
        { where: { userId: user_Id, postId: post_Id } },
        { truncate: true, restartIdentity: true }
      )
        .then(() => {
          res.status(204).json({ message: 'Like supprimé ' });
        })
        .catch(() => {
          res.status(404).json({ error: 'Problème like delete' });
        });
    });
  } catch {*/
  Like.create({ userId: user_Id, postId: post_Id })
    .then(() => {
      Post.findOne({ where: { id: post_Id } })
        .then((p) => {
          const likes = req.body.likes + 1;
          console.log(likes);
          let post = { ...req.body, likes: likes };
          p.update(post);
          p.save(post);
          console.log(post);
          console.log(Post);
        })
        .catch(() => {
          res
            .status(404)
            .json({ error: 'Problème Like enregistrment ds post' });
        });
    })
    .then(() => {
      res.status(201).json({ message: 'Post Liké' });
    })
    .catch(() => {
      res.status(404).json({ error: 'Problème Like creation' });
    });
  /*}*/
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
      console.log(error);
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
        console.log(filename, 'here');
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
