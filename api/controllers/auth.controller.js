import User from "../modals/user.modal.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
 try {
    console.log("Signup request received with:", { username, email, password });
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json("User created successfully! Nice to Coder");
  } catch (error) {
    next(errorHandler(550,'error from the function'))
  }
};
