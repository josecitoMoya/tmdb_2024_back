import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import bcrypt from "bcryptjs";

export const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: async (user, options) => {
        try {
          const saltRounds = 10;
          const salt = await bcrypt.genSalt(saltRounds);
          const hashedPassword = await bcrypt.hash(user.password, salt);

          user.password = hashedPassword;
          user.salt = salt;
        } catch (error) {}
      },
    },
  }
);

User.prototype.generateHash = async function (password, saltROunds = 10) {
  try {
    const hash = await bcrypt.hash(password, saltROunds);
    return hash;
  } catch (error) {
    throw new Error(error);
  }
};

User.prototype.validatePassword = async function (password) {
  try {
    return bcrypt.compare(password, this.salt);
  } catch (error) {
    throw new Error(error);
  }
};
