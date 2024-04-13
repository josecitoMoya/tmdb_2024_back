import Sequelize from "sequelize";
import "dotenv/config";

const {
  DB_DIALECT,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

export const sequelize = new Sequelize(
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,

  {
    host: POSTGRES_HOST,
    dialect: DB_DIALECT,
  }
);
