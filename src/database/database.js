import Sequelize from "sequelize";

export const sequelize = new Sequelize("tmdb_db", null, null, {
  host: "localhost",
  dialect: "postgres",
});
