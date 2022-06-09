//installation express
const express = require('express');
const app = express();

//To parse incoming JSON requests and put the parsed data in req.body.
app.use(express.json());

//installation .env
require('dotenv').config();

//Bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//installation helmet
const helmet = require('helmet');
app.use(helmet());

//Gestion du CORS pour que nos deux serveurs puissent communiquer entre eux
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

//Gestion des images
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));

//Test
app.use((req, res) => {
  res.json({ message: 'Votre requête a bien été reçue!' });
});
app.get('/', (req, res) => {
  console.log('API is up');
});

//Lien vers les routes pour les posts
const postRoutes = require('./routes/post');
app.use('/api/posts', postRoutes);

//Lien vers les routes pour les utilisateurs
const userRoutes = require('./routes/user');
app.use('/api/auth', userRoutes);

//Installation Sequelize et connection MySQL
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const databaseConfig = require('./config/config')[env];
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    port: 8889,
    dialect: databaseConfig.dialect,
  }
);
sequelize.authenticate()
    .then(() => console.log('Connected to the database !'))
    .catch((err) => console.log(err));

module.exports = app;
