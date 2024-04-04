import { User } from "../models/User.js";

const userServices = {};

userServices.createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error("User can not be created");
  }
};

userServices.findUser = async (userData) => {
  const { email, userName } = userData;
  try {
    const findedByEmail = await User.findOne({ where: { email } });
    const findedByUserName = await User.findOne({ where: { userName } });

    findedByEmail ? findedByEmail : findedByUserName;
  } catch (error) {
    throw new Error("Email or User Name not found", error);
  }
};

export default userServices;
