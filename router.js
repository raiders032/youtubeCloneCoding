import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("hello world!!!"));
userRouter.get("/profile", (req, res) => res.send("user profile!!!"));
userRouter.get("/edit", (req, res) => res.send("user edit!!!"));
