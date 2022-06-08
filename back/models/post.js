const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Post = sequelize.define('Post', {
    // Model attributes are defined here
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },
      userId:{
          type:DataTypes.INTEGER,
          references:{
              model: 'User',
              key:'id',
          }
      },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    loves: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    usersLiked: {
        type: DataTypes.JSON,
    },
    usersLoved: {
        type: DataTypes.JSON,
    },
    imageUrl: {
        type: DataTypes.STRING,
    }
  }, {
    // Other model options go here
  });
  
  // `sequelize.define` also returns the model
  console.log(Post === sequelize.models.Post); // true