const Post = require('../models/post');
const fs = require('fs');

/*logique metier des routes post*/
exports.createPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    userId: req.body.userId,
  });
  post
    .create()
    .then(() => {
      res.status(201).json({
        message: 'Post saved successfully!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
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
