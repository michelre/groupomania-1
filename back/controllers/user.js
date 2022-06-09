const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

//Route Post/Création d'un utilisateur
exports.signin = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = {
        email: req.body.email,
        password: hash,
        firstName: req.body.firstName,
        department: req.body.department,
        imageUrl: req.body.imageUrl,
      };
      User.create(user)
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
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
  const id = req.params.id;
  User.findOne({ where: { id: id } })
    .then((user) => {
      if (user.id !== req.auth.id) {
        res.status(403).json({ message: 'requête non autorisée!' });
      } else {
        const filename = user.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          User.destroy({ where: { id: id } })
            .then(() => res.status(204).end())
            .catch((error) => res.status(400).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};

//Route Put/Modification d'un utilisateur
exports.modifyUser = (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      if (user.id !== req.auth.id) {
        res.status(403).json({ message: 'requête non autorisée!' });
      }
      if (!req.file) {
        User.update(
          { where: { id: req.params.id } },
          { ...req.body, id: req.params.id }
        )
          .then(() => res.status(200).json({ message: 'Utilisateur modifié!' }))
          .catch((error) => res.status(400).json({ error }));
      } else {
        const filename = user.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          const userObject = req.file
            ? {
                ...JSON.parse(req.body.user),
                imageUrl: `${req.protocol}://${req.get('host')}/images/${
                  req.file.filename
                }`,
              }
            : { ...req.body };
          User.update(
            { where: { id: req.params.id } },
            { ...userObject, id: req.params.id }
          )
            .then(() =>
              res.status(200).json({ message: 'Utilisateur modifié!' })
            )
            .catch((error) => res.status(400).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(404).json({ error: error });
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
