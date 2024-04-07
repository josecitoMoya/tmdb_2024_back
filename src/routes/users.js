import express from "express";

export const user = express.Router();

user.get("/", (req, res) => {
  res.send("Estas en routes/user");
});

// router.post("/signup", userController)
