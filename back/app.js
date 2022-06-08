//installation express
const express = require('express');
const app = express();

//To parse incoming JSON requests and put the parsed data in req.body.
app.use(express.json());

//installation .env
require('dotenv').config();

//Bodyparser
const bodyParser = require("body-parser")
app.use(bodyParser.json());

//installation helmet 
const helmet = require('helmet');
app.use(helmet());

//Gestion du CORS pour que nos deux serveurs puissent communiquer entre eux
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Gestion des images
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));

//Test
app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue!' }); 
 });

 //Lien vers les routes pour les posts
 const postRoutes = require('./routes/post');
 app.use('/api/post', postRoutes);

 //Lien vers les routes pour les utilisateurs
 const userRoutes = require('./routes/user');
 app.use('/api/auth', userRoutes);

 //Installation Sequelize et connection MySQL
 const databaseConfig = require("./database_config.js");
 const { Sequelize } = require('sequelize');
 const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD,  {
    host: databaseConfig.HOST,
    dialect: databaseConfig.dialect,
    pool: {
      max: databaseConfig.pool.max,
      min: databaseConfig.pool.min,
      acquire: databaseConfig.pool.acquire,
      idle: databaseConfig.pool.idle
    }
  }
  );
  sequelize.authenticate().then(() =>
  console.log("Connected to the database !")
);

  /*try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }*/
module.exports = app;