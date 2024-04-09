import { User } from "../models/User.js";

const userServices = {};

userServices.findAllUsers = async () => {
  try {
    const findAllUser = await User.findAll();

    return findAllUser;
  } catch (error) {}
};

userServices.createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return { message: "User created successfuly", newUser };
  } catch (error) {
    throw new Error("User can not be created", error);
  }
};

userServices.findUser = async (userData) => {
  const { email, userName } = userData;
  try {
    const findedByEmail = await User.findOne({ where: { email: email } });
    const findedByUserName = await User.findOne({
      where: { userName: userName },
    });

    return findedByEmail ? findedByEmail : findedByUserName;
  } catch (error) {
    throw new Error("Email or User Name not found", error);
  }
};

userServices.loginUser = async (userData) => {
  const { email, userName, password } = userData;

  try {
    const user = email
      ? await User.findOne({ where: { email } })
      : await User.findOne({ where: { userName } });

    if (!user) return { message: "Wrong user or password" };

    const userValidated = await user.validatePassword(password);

    if (!userValidated) return { message: "Wrong user or password" };

    return { message: "User loggedin successfuly", user };
  } catch (error) {
    throw new Error(error);
  }
};

export default userServices;
