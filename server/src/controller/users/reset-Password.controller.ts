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

        // 1. Токеныг баталгаажуулж, доторх userId-г гаргаж авах
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
            userId: string;
            verifyCode: number;
        };

        // 2. Хэрэглэгчээ зөвхөн токен доторх userId-аар хайх
        const user = await UserModel.findById(decoded.userId);
        
        if (!user) {
            return res.status(404).json({ message: "Хэрэглэгч олдсонгүй" });
        }

        // 3. VerifyCode-ийг шалгах
        if (decoded.verifyCode !== verifyCode) {
            return res.status(400).json({ message: "Баталгаажуулах код буруу байна" });
        }

        // 4. Нууц үгийг шинэчлэх
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(String(newPassword), salt);
        
        await user.save();
        res.status(200).send({ message: "Нууц үг амжилттай шинэчлэгдлээ" });

    } catch (error) {
        console.error("Reset Password Error:", error);
        res.status(400).json({ message: "Хүчингүй токен эсвэл хугацаа дууссан" });
    }
};