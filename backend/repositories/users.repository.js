import { UserModel } from "../models/user.model.js"

export async function getUser(email) {
  const user = await UserModel.findOne({
    email
  })

  return user;
}