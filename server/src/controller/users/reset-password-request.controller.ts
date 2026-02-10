import { Request, Response } from "express";
import { UserModel } from "../../schema/user.schema";
import { ResetPasswordVerificationEmail } from "../../utils/reset-password";

export const resetPasswordRequest = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User oldsongui" });
        }
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        const result = await ResetPasswordVerificationEmail(email, otpCode);

        if (result.success) {
            user.resetPasswordOtp = otpCode;
            user.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000); 
            await user.save();
            
            return res.status(200).json({ message: "Verify code ilgeelee" });
        } else {
            return res.status(500).json({ message: "Mail yvuulahad aldaa garlaa" });
        }
    } catch (error: any) {
        console.error("Reset Request Error:", error.message);
        return res.status(500).json({ message: "Aldaa garlaa" });
    }
};