module.exports = (sequelize) => {
  const Like = sequelize.define('like', {}, { timestamp: false });
  return Like;
};
