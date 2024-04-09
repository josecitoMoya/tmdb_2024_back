import { validateToken } from "../config/tokens.js";

export const validateUser = (req, res, next) => {
  try {
    const token = req.cookies.token;

    const payload = validateToken(token);

    if (!payload) return res.send(401);

    next();
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCookie = () => {
  res.clearCookie();
};
