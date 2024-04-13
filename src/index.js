import { sequelize } from "./database/database.js";
import "dotenv/config";

import app from "./app.js";

import "./models/index.js";

async function main() {
  const { PORT } = process.env;
  const MESSAGE = process.env.SERVER_MESSAGE;
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`${MESSAGE} ${PORT}`));
  } catch (error) {
    console.log("Error", error);
  }
}

main();
