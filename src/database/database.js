import Sequelize from "sequelize";
import "dotenv/config";

// const dbName = process.env.DB_NAME;
const dbName = "tmdb_db";
const dbHost = process.env.DB_HOST;

const dbDialect = process.env.DB_DIALECT;

export const sequelize = new Sequelize("tmdb_db", "joseMoya", "db_password", {
  host: "database",
  dialect: "postgres",
});
