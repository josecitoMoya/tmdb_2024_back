import jwt from "jsonwebtoken";
import "dotenv/config";

const { TOKEN_SECRET, EXPIRES_TIME } = process.env;

export const generateToken = (userData) => {
  const { name, lastName, email } = userData.user.dataValues;
  return jwt.sign({ name, lastName, email }, TOKEN_SECRET, {
    expiresIn: EXPIRES_TIME,
  });
};

export const validateToken = (userData) => {
  const tokenValidated = jwt.verify(userData, TOKEN_SECRET);
  return tokenValidated;
};
