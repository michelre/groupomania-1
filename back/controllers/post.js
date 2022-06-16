//const Post = require('../models/post');
const db = require('../models');
const Post = db.post;
const fs = require('fs');

/*logique metier des routes post*/
exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  console.log(req.body.post);
  delete postObject.id;
  const post = new Post({
    ...postObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`,
  });
  post
    .save()
    .then(() => res.status(201).json({ message: 'Post enregistré!' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllPosts = (req, res, next) => {
  Post.findAll()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.likePost = (req, res, next) => {};

exports.lovePost = (req, res, next) => {};

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
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      if (!req.file) {
        Post.update(
          { where: { id: req.params.id } },
          { ...req.body, id: req.params.id }
        )
          .then(() => res.status(200).json({ message: 'Post modifié!' }))
          .catch((error) => res.status(400).json({ error }));
      } else {
        const filename = post.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          const postObject = req.file
            ? {
                ...JSON.parse(req.body.post),
                imageUrl: `${req.protocol}://${req.get('host')}/images/${
                  req.file.filename
                }`,
              }
            : { ...req.body };
          Post.update(
            { ...postObject, id: req.params.id },
            { where: { id: req.params.id } }
          );
          post
            .save()
            .then(() => res.status(200).json({ message: 'Post modifié!' }))
            .catch((error) => res.status(400).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.destroy({ where: { id: req.params.id } })
          .then(() => res.status(204).end())
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
