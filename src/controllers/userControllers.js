import { generateToken } from "../config/tokens.js";
import userServices from "../services/userServices.js";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const findedUser = await userServices.findUser(userData);

    if (findedUser) {
      return res.send({ message: "user or email allready registred" });
    }

    const newUser = await userServices.createUser(userData);
    res.send(newUser);
  } catch (error) {
    throw new Error(error);
  }
};

export const findUser = async (req, res) => {
  try {
    const userData = req.body;

    const findedUser = await userServices.findUser(userData);

    res.send(findedUser);
  } catch (error) {
    throw new Error(error);
  }
};

export const findAllUsers = async (req, res) => {
  const allUsers = await userServices.findAllUsers();

  res.send({ message: "Users data sended", allUsers });
};

export const userLogin = async (req, res) => {
  try {
    const userData = req.body;

    const userLogedIn = await userServices.loginUser(userData);

    const token = generateToken(userLogedIn);

    res.cookie("token", token).send(userLogedIn);
  } catch (error) {
    throw new Error(error);
  }
};

export const userLogout = async (req, res) => {
  try {
    const token = await req.cookies.token;

    res.clearCookie(token).sendStatus(200);
  } catch (error) {
    throw new Error(error);
  }
};
