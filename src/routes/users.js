import express from "express";

import {
  createUser,
  findAllUsers,
  findUser,
  userLogin,
  userLogout,
} from "../controllers/userControllers.js";
import { validateUser } from "../middleware/auth.js";

export const user = express.Router();

user.post("/signup", createUser);
user.post("/login", userLogin);
user.post("/logout", userLogout);

user.get("/users", findUser);
user.get("/all", validateUser, findAllUsers);
user.get("/me", validateUser, (req, res) => {
  console.log("SOY REQ.USER", req.user);
  res.send(req.user);
});
