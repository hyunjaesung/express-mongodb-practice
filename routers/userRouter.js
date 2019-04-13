import express from "express";
import routes from "../routers";

export const userRouter = express.Router();


userRouter.get(routes.userDetail, (req,res) => res.send("user detail"));
userRouter.get(routes.editProfile, (req,res) => res.send("editprofile"));
userRouter.get(routes.changePassword, (req,res) => res.send("change password"));