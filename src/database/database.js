import Sequelize from "sequelize";

export const sequelize = new Sequelize("tmdb_db", "postgres", "postgres", {
  host: "db",
  dialect: "postgres",
});
