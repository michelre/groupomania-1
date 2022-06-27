const db = require('../models');
const Post = db.post;
const fs = require('fs');
const { getUserIdFromToken, getRoleFromToken } = require('../middleware/auth');

/*logique metier des routes post*/
exports.createPost = (req, res, next) => {
  const postObject = req.body;
  console.log(req.body);
  delete postObject.id;
  let imageUrl = '';
  if (req.file) {
    imageUrl = `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`;
    console.log(imageUrl);
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
  /**TODO: Table like
        - Like +1 -> ajouter une ligne dans la table like
        - LIke -1 -> supprimer une ligne dans la table like
        - Si une utilisateur a déjà liké, le backend doit lever une erreur
     **/
  Post.findOne({ where: { postId: req.params.id } })
    .then((post) => {
      if (userId == post.usersLiked) {
        Post.decrement({ likes: 1 });
        Post.destroy({ usersLiked: userId });
        res.status(200).json({ message: 'Like supprimé ' });
      } else {
        Post.increment({ likes: 1 });
        Post.update({ usersLiked: userId });
        res.status(201).json({ message: 'Post Liké' });
      }
    })
    .catch((error) => {
      res.status(404).json({ error: error });
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
    .then((post) => {
      if (post.userId === authUserId || role === 1) {
        let newPost = { ...req.body };
        if (req.file) {
          const filename = post.imageUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`, () => {
            newPost = {
              ...newPost,
              imageUrl: `${req.protocol}://${req.get('host')}/images/${
                req.file.filename
              }`,
            };
          });
        }
        post.update({ ...newPost });
        post
          .save()
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
