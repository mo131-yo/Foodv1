import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { UserModel } from "../../schema/user.schema";


// export const resetPassword = async (req: Request, res: Response) => {
//     try {
//         const { token , verifyCode, newPassword } = req.body;

//         const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
//             userId: string, verifyCode: string
//         }
//         const user = await UserModel.findById(decoded.userId);
        
//         user.password = bcrypt.hashSync(String(newPassword), 10);
//         await user.save()
//         res.status(200).send({ message: "password amjilttai shinchillee"});

//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ message: "Hugatsaa duussan" });
//     }
// };

export const resetPassword = async (req: Request, res: Response) => {
    try {
        const { token, verifyCode, newPassword } = req.body;
        const { userId } = req.params; // URL-аас ирж буй userId-г авах

        // 1. Токеныг баталгаажуулах
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
            userId: string;
            verifyCode: string;
        };

        // 2. URL-ийн userId болон Токен доторх userId таарч байгааг шалгах (Security check)
        if (decoded.userId !== userId) {
            return res.status(401).json({ message: "Хүчингүй хүсэлт" });
        }

        // 3. Хэрэглэгчээ хайх
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "Хэрэглэгч олдсонгүй" });
        }

        // 4. VerifyCode-ийг шалгах (Хэрэв токен дотор хадгалсан бол)
        if (decoded.verifyCode !== verifyCode) {
            return res.status(400).json({ message: "Баталгаажуулах код буруу байна" });
        }

        // 5. Нууц үгийг шинэчлэх
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(String(newPassword), salt);
        
        await user.save();
        res.status(200).send({ message: "Нууц үг амжилттай шинэчлэгдлээ" });

    } catch (error) {
        console.error("Reset Password Error:", error);
        res.status(400).json({ message: "Хүчингүй токен эсвэл хугацаа дууссан" });
    }
};