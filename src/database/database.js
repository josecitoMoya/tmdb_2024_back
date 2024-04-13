import Sequelize from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize("tmdb_db", "joseMoya", "db_password", {
  host: "database",
  dialect: "postgres",
});
