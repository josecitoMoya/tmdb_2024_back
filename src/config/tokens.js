import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET = process.env.TOKEN_SECRET;
const expires = process.env.EXPIRES_TIME;

export const generateToken = (userData) => {
  const { name, lastName, email } = userData.user.dataValues;
  return jwt.sign({ name, lastName, email }, SECRET, { expiresIn: expires });
};

export const validateToken = (userData) => {
  const tokenValidated = jwt.verify(userData, SECRET);
  return tokenValidated;
};
