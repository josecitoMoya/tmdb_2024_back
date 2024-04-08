import express from "express";

import {
  createUser,
  findAllUsers,
  findUser,
  userLogin,
} from "../controllers/userControllers.js";

export const user = express.Router();

user.post("/signup", createUser);
user.post("/login", userLogin);

user.get("/users", findUser);

user.get("/all", findAllUsers);
