import { UserModel } from "../../../schema/user.schema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyUserEmail } from "../../../utils/mail-utils";

export const signUpController = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const User = await UserModel.findOne({ email });
        if (User) {
            return res.status(400).json({ message: "Email burtgegdsen bn" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({name, email, password: hashedPassword});

        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET || "hello", { expiresIn: "1d" } );

        await verifyUserEmail(email,`${process.env.BACKEND_API || "http://localhost:8000"}/users/verify-email?token=${token}`) ;

        res.status(201).json({
            message: "Burtgel amjilttai , email luu tani mail yvuulsan",
            userId: newUser._id
        });

    } catch (error: any) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Aldaa", error: error.message });
    }
}