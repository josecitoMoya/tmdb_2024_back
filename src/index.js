import { sequelize } from "./database/database.js";
import "dotenv/config";

import app from "./app.js";

import "./models/index.js";

async function main() {
  const { PORT, SERVER_MESSAGE } = process.env;

  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`${SERVER_MESSAGE} ${PORT}`));
  } catch (error) {
    console.log("Error", error);
  }
}

main();
