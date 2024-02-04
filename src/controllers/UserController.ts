import { RequestHandler } from "express";
import UserModel from "../models/user.model";



export const testUser: RequestHandler = async (req, res, next) => {
  return res
    .status(200)
    .json({ message: "tes for user api" });

};


export const createUser: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.body)
    // console.log(req)
    const user = await UserModel.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "User created successfully", data: user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "We are sorry, an error has occurred", error: error });
  }

};