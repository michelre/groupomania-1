const User= require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


/*exports.signin = (req, res) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash,
          firstName: req.body.firstName,
          department: req.body.department,
          imageUrl: req.body.imageUrl,
        });
        User.create(user) 
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };*/

  exports.signin = (req, res) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = {
          email: req.body.email,
          password: hash,
          firstName: req.body.firstName,
          department: req.body.department,
          imageUrl: req.body.imageUrl,
        };
        User.create(user)
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }))
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.login = (req, res) => {
    User.findOne({ where: {email: req.body.email }})
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user.id,
              token: jwt.sign(
                { userId: user.id },
                process.env.JWT_SECRET,
                { expiresIn: '24h' })
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.destroy({where: {userId: id}})
    .then(num => {
      if (num === 1) {
        res.status(204).end()
      }
    });
  }