import express from "express";

import {
  createUser,
  findAllUsers,
  findUser,
} from "../controllers/userControllers.js";

export const user = express.Router();

user.post("/signup", createUser);

user.get("/users", findUser);

user.get("/all", findAllUsers);
