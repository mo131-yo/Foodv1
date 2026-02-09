// import {Request, Response} from "express";
// import { verify } from "jsonwebtoken";


// export const verifyUser = async (req: Request, res: Response) => {
//     try {
//         const token  = req.query.token as string

//         const decoded = verify(token, "hello")
//         console.log(decoded);
        
//     } catch (error: any) {
//         res.status(400).json({ message: "aldaa", error: error.message });
//     }
// }

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../schema/user.schema";

export const verifyUser = async (req: Request, res: Response) => {
    try {
        const { token } = req.query; 

        if (!token) {
            return res.status(400).json({ message: "Token bhq" });
        }

        const decoded: any = jwt.verify(token as string, process.env.JWT_SECRET || "hello");

        const user = await UserModel.findByIdAndUpdate(
            decoded._id, 
            { isVerified: true },
            { new: true } 
        );

        if (!user) {
            return res.status(404).json({ message: "Hereglegch oldsongui" });
        }

        res.status(200).send(`
            <h1>Bayr hurgey.</h1>
            <p>${user.email} amjilttai burtgegdlee. Odoo nevterch bolno</p>
        `);

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "time out" });
    }
};