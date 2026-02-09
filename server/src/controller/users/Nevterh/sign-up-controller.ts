import { UserModel } from "../../../schema/user.schema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyUserEmail } from "../../../utils/mail-utils";

// export const signUpController = async (req: Request, res: Response) => {
//     try{
//         const {name, email, password } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10)
//         console.log(hashedPassword);
        
//         const createNewUser = await new UserModel({username: name, email, password: hashedPassword });

//         await createNewUser.save();

//         const token = jwt.sign({ _id: createNewUser._id}, "hello", { expiresIn: "2y" });

//         const decoded =  jwt.decode(token);
//         console.log(decoded);

//         const verify = jwt.verify( token, "hello");
//         console.log(verify);

//         await verifyUserEmail(email, `${process.env.BACKEND_API}/users/verify-user?token=${token}`)

//         const isPasswordValid = await bcrypt.compare(password, hashedPassword);

//         const newUser = await UserModel.create({ email, password: hashedPassword, verificationToken: token, ttl: new Date(Date.now() + 10 * 60 * 1000) });

//         res.status(200).json({message: "User amjilttai burtgegdlee", data: createNewUser, verify, token, decoded, isPasswordValid, newUser});
//     }catch(error){
//         console.error(error);
//         res.status(500).json({message: "Aldaa garlaa"});
//     }
// }

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

        await verifyUserEmail(email,`${process.env.BACKEND_API}/users/verify-user?token=${token}`) ;

        res.status(201).json({
            success: true,
            message: "Burtgel amjilttai , email ta luu yvuulsan",
            userId: newUser._id
        });

    } catch (error: any) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Aldaa", error: error.message });
    }
}