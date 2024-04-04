import app from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/index.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000, () => console.log("Server listening at port 3000"));
  } catch (error) {
    console.log("Error", error);
  }
}

main();
