require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.MDP,
    database: process.env.DB,
    host: process.env.HOST,
    port: 8889,
    dialect: process.env.DIALECT,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    port: process.env.PORT,
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    port: process.env.PORT,
    dialect: 'mysql',
  },
};
