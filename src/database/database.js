import Sequelize from "sequelize";
import "dotenv/config";

const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT;

export const sequelize = new Sequelize(dbName, null, null, {
  host: dbHost,
  dialect: dbDialect,
});
