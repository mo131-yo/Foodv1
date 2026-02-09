import {Request, Response} from "express";
import { UserModel } from "../../schema/user.schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { verifyUserEmail } from "../../utils/mail-utils";

// export const createUser = async (req: Request, res: Response) => {
//     try{
//         const { name, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new UserModel({ name, email, password: hashedPassword });
//         const savedUser = await user.save();

//         const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET || "hello", { expiresIn: "10d" } )

//         const decoded =  jwt.decode(token);
//         console.log(decoded);

//         await verifyUserEmail(email, `${process.env.BACKEND_API}/users/verify-user?token=${token}`)

//         res.status(200).json({message: "Batalgaajuulah Link email ruu chini yvuullaa", data: savedUser, hashedPassword});
//     }catch(error){
//         console.error(error);
//     }
// }

// export const createUser = async (req: Request, res: Response) => {
//     try {
//         const { name, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new UserModel({ name, email, password: hashedPassword });
//         const savedUser = await user.save();

//         const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET || "hello", { expiresIn: "10d" });

//         try {
//             await verifyUserEmail(email, `${process.env.BACKEND_API}/users/verify-user?token=${token}`);
//         } catch (mailError) {
//             console.error("Mail илгээхэд алдаа гарлаа:", mailError);
//         }

//         return res.status(200).json({
//             message: "Batalgaajuulah Link email ruu chini yvuullaa",
//             data: savedUser
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Server-ийн алдаа", error });
//     }
// }


export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({ name, email, password: hashedPassword,isVerified: true  });
        
        const savedUser = await user.save();

        const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET || "hello", { expiresIn: "10d" });

        try {
            await verifyUserEmail(email, "User tani amjilttai batalgaajlaa. Odoo ta nevterch bolno");
        } catch (mailError) {
            console.error("Mail yvuulahad aldaa garlaa gehdee user uussen");
        }

        res.status(200).json({
            message: "User amjilttai uuslee", 
            data: savedUser
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Aldaa garlaa" });
    }
}