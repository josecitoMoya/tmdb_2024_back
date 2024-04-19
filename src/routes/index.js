import express from "express";

import { user } from "./users.js";
import { api } from "./tmdb.js";

const router = express.Router();

router.use("/user", user);
router.use("/movies", api);

export default router;
