// import { UserModel } from "../../../schema/user.schema";
// import { Request, Response } from "express";
// import bcrypt from "bcrypt";


// export const signInController = async (req: Request, res: Response) => {
//     try {
//         const { email, password } = req.body;
        
//         const user = await UserModel.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "oldsongui" });
//         }

//         if (!user.isVerified) {
//             return res.status(403).json({ message: "Email ee batalgaajuul" });
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: "Password buruu bn" });
//         }
//         const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

//         user.otpCode = otpCode; 
//         await user.save();

//         res.status(200).json({
//             message: "Email yvuullaa",
//             email: user.email,
//             step: "VERIFY_OTP" 
//         });

//     } catch (error) {
//         console.error("SignIn Error:", error);
//         res.status(500).json({ message: "Aldaa" });
//     }
// }

import { UserModel } from "../../../schema/user.schema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signInController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User oldsongui" });
        }

        if (!user.isVerified) {
            return res.status(403).json({ message: "Email ee batalgaajuul" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Nuuts ug buruu bna" });
        }

        const token = jwt.sign(
            { _id: user._id, email: user.email }, 
            process.env.JWT_SECRET || "hello", 
            { expiresIn: "10d" } 
        );

        res.status(200).json({
            message: "Success",
            token: token, 
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("SignIn Error:", error);
        res.status(500).json({ message: "Aldaa garlaa" });
    }
}