import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { User } from "./User.js";

export const Favorite = sequelize.define("favorites", {
  tmdb_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});