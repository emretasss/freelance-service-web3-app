import User from "../models/user.model.js";
import jwt  from "jsonwebtoken"

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!token) res.status(401).send("you are not authentaticated")
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");

};
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};