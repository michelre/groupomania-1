const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: { msg: "Le format de votre prénom n'est pas correct" },
          len: {
            args: [1, 25],
          },
          notNull: { args: true, msg: 'Veuillez entrer votre prénom' },
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Le format de votre email n'est pas correct",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isStrongPassword: {
            msg: "Votre mot de passe n'est pas assez fort: minimum 8 caractères, min 1 miniscule, min 1 majuscule, min 1 chiffre, min 1 symbole",
          },
        },
      },
      department: {
        type: DataTypes.STRING,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, 'a');
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
        beforeUpdate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, 'a');
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      },
    }
  );
  return User;
};
