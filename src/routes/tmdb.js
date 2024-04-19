import express from "express";

import { tmdb } from "../controllers/tmdbControllers.js";

export const api = express.Router();

api.get("/tmdb", tmdb);
