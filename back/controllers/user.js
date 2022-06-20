const db = require('../models');
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const fs = require('fs');
const { getUserIdFromToken } = require('../middleware/auth');

//Route Post/Création d'un utilisateur
exports.signin = (req, res) => {
  const userObject = req.body.user;
  delete userObject.id;
  const user = new User({
    ...userObject,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
    .catch((error) => res.status(400).json({ error }));
};

//Route Post/Connexion d'un utilisateur
exports.login = (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
              expiresIn: '24h',
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//Route Delete/Supprétion d'un utilisateur
exports.deleteUser = (req, res) => {
  const authUserId = getUserIdFromToken(req);
  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (user.userId !== authUserId) {
        res.status(403).end();
        return;
      }
      const filename = user.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        User.destroy({ where: { id: req.params.id } })
          .then(() => res.status(204).end())
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

//Route Put/Modification d'un utilisateur
exports.modifyUser = (req, res) => {
  const authUserId = getUserIdFromToken(req);
  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (user.id !== authUserId) {
        res.status(403).json({ message: 'Utilisateur non autorisé!' });
        return;
      }
      let newUser = { ...req.body };
      if (req.file && user.imageUrl) {
        const filename = user.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          newUser = {
            ...newUser,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${
              req.file.filename
            }`,
          };
        });
      }
      user.update({
        ...newUser,
      });
      user
        .save()
        .then(() => res.status(200).json({ message: 'Utilisateur modifié!' }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({ status: 'KO', error: error });
    });
};

//Route GET/Affichage d'un utilisateur
exports.getOneUser = (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((oneuser) => {
      res.status(200).json(oneuser);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
