import { createUser, getUserByIdAndGet } from "../controller";
import { Router } from "express";
import { signUpController } from "../controller/users/Nevterh/sign-up-controller";
import { signInController } from "../controller/users/Nevterh/sign-in-controller";
import { verifyUser } from "../controller/users/verify-user.controller";
import { updateUser } from "../controller/users/update.controller";
import { getAllUsers } from "../controller/users/all-user.controller";
import { resetPassword } from "../controller/users/reset-Password.controller";

export const userRouter = Router();

userRouter.post("/create-user", createUser);

userRouter.get("/get-user-by-id-get-request/:userId", getUserByIdAndGet);

userRouter.get("/all-users", getAllUsers)

userRouter.post("/sign-up", signUpController);
userRouter.post("/sign-in", signInController);

userRouter.get("/verify-user", verifyUser);

userRouter.post("/resend-otp", signInController);

userRouter.post("/update-user/:id", updateUser);

userRouter.patch("/reset-password-request", resetPassword);