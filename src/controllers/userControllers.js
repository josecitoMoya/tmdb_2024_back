import userServices from "../services/userServices.js";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const findedUser = await userServices.findUser(userData);

    if (findedUser) {
      return res.send({ message: "user or email allready registred" });
    }

    const newUser = await userServices.createUser(userData);
    res.send({ message: "User created", newUser });
  } catch (error) {
    throw new Error(error);
  }
};

export const findUser = async (req, res) => {
  try {
    const userData = req.body;

    const findedUser = await userServices.findUser(userData);

    res.send({ message: "User finded", findedUser });
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

    if (!userLogedIn) {
      return res.status(401).send({ message: "Invalid user or passoword" });
    }

    res.send({ message: "User loged in successfuly", userLogedIn });
  } catch (error) {
    throw new Error(error);
  }
};
