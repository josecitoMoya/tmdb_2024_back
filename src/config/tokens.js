import jwt from "jsonwebtoken";

const SECRET = "bazinga";

export const generateToken = (userData) => {
  const { name, lastName, email } = userData.user.dataValues;

  return jwt.sign({ name, lastName, email }, SECRET, { expiresIn: "2h" });
};

export const validateToken = (userData) => {
  const tokenValidated = jwt.verify(userData, SECRET);
  return tokenValidated;
};
