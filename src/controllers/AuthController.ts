import { RequestHandler } from "express";
import UserModel from "../models/user.model";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

interface LoginCredentials {
  username: string
  password: string
}
export const login: RequestHandler = async (req, res, next) => {
  try {
    const username = req.body.username
    const password = req.body.password.toString();
  
    const user = await UserModel.findOne({where: { username:  username} });

    if (user === null) return res.status(404).json({
      status: 404,
      success: false,
      message: "User not found",
    });

    const isPasswordMatched = await bcrypt.compareSync(password, user.password);

    if (!isPasswordMatched) return res.status(400).json({
      status: 400,
      success: false,
      message: "wrong password",
    });


    const token = jwt.sign(
      { id: user.id, email: user.username },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "18000s",
      }
    );

    return  res.status(200).json({
      status: 200,
      success: true,
      message: "login success",
      token: token,
    });

    } catch (error) {
      return res
        .status(500)
        .json({ message: "We are sorry, an error has occurred", error: error });
  }

};