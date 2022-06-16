'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Tables
db.post = require('./post.js')(sequelize, Sequelize);
db.user = require('./user.js')(sequelize, Sequelize);

//Associations User & Post (One-To-Many)
db.user.hasMany(db.post, {
  foreignKey: 'userId',
  onDelete: 'cascade',
});
db.post.belongsTo(db.user);

//Associations User & Post (Many-To-Many)
db.user.belongsToMany(db.post, { through: 'Like' });
db.post.belongsToMany(db.user, { through: 'Like' });

module.exports = db;
