import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import connectToMongoDB from "./mongoDb";
import { foodCategoryRouter, foodRouter, userRouter } from "./router";
import { UserModel } from "./schema/user.schema";
import bcrypt from "bcrypt";
import { orderRouter } from "./router/order.router";


configDotenv();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running!");
});


app.get("/get-users", async (req: Request, res: Response) => {
    const users = await UserModel.find({});
    res.status(200).send({ message: "users avlaa", data: users });
});

app.use('/users', userRouter);
app.use("/foods", foodRouter);
app.use("/foods-category", foodCategoryRouter);
app.use("/foods-order", orderRouter);



app.post("/verify-otp", async (req, res) => {
    const { email, otpCode } = req.body;
    const user = await UserModel.findOne({ email });
    
    if (!user) {
        return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    
    const dbOtp = String(user.resetPasswordOtp).trim();
    const inputOtp = String(otpCode).trim();
    
    const isCodeWrong = dbOtp !== inputOtp;
    const isExpired = new Date() > new Date(user.resetPasswordExpires!); 
    
    if (isCodeWrong || isExpired) {
        return res.status(400).json({ 
            message: isCodeWrong ? "Код буруу байна" : "Кодын хугацаа дууссан байна" 
        });
    }
    res.status(200).json({ message: "Код амжилттай баталгаажлаа" });
});



const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
    try {
        await connectToMongoDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (err) {
        console.error("MongoDB connection failed:", err);
    }
});
// // app.listen(8000, () => console.log("http://localhost:8000"));