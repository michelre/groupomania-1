module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Votre post est vide' },
      },
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    usersLiked: {
      type: DataTypes.INTEGER,
      get: function () {
        return JSON.parse(this.getDataValue('usersLiked'));
      },
      set: function (val) {
        return this.setDataValue('usersLiked', JSON.stringify(val));
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  });
  return Post;
};
