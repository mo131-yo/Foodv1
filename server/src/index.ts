// import cors from "cors";
// import { configDotenv } from "dotenv";
// import express, { Application , Request, Response, Router} from "express";
// import connectToMongoDB from "./mongoDb";
// import { Schema } from "mongoose";
// import { foodCardRouter, foodCategoryRouter, foodRouter, userRouter } from "./router";
// import { UserModel } from "./schema/user.schema";
// import bcrypt from "bcrypt";
// import { ResetPasswordVerificationEmail } from "./utils/reset-password";
// import { orderRouter } from "./router/order.router";

// configDotenv();

// const app: Application= express()

// app.use(express.json());
// app.use(cors());


// app.post("/create-user", async (req: Request, res: Response)=>{
//     const {name, email, password} = req.body;

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = await UserModel.create();

//     res.status(200).send({message: "user amjilttai uuslee", data: newUser});
// });

// const prompt = process.env.PORT || 8000;
// app.get("/get-users", async (req: Request, res: Response)=>{
//     const users = await UserModel.find;
//     res.status(200).send({message:"users avlaa", data: users});
// })

// app.use('/users', userRouter);

// app.use("/foods", foodRouter);
// app.use("/foods-card", foodCardRouter);
// app.use("/foods-category", foodCategoryRouter); 
// app.use("/foods-order", orderRouter );


// app.post("/reset-password", async (req, res) => {
//   const { email } = req.body;
//   const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

//   const user = await UserModel.findOne({ email });
//   if (!user) return res.status(404).json({ message: "User oldsongui" });

//   user.resetPasswordOtp = otpCode;
//   user.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000);
//   await user.save();

//   const result = await ResetPasswordVerificationEmail(email, otpCode);

//   if (result.success) {
//     res.status(200).json({ message: "mail amjilttai ilgeelee" });
//   } else {
//     res.status(500).json({ message: "Aldaa garlaa", error: result.error });
//   }
// });
  

// app.listen(prompt, async()=>{
//     await connectToMongoDB()
//     console.log(`server is running on port ${prompt}`);
// })

// // app.listen(8000, () => console.log("http://localhost:8000"));



import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import connectToMongoDB from "./mongoDb";
import { foodCardRouter, foodCategoryRouter, foodRouter, userRouter } from "./router";
import { UserModel } from "./schema/user.schema";
import bcrypt from "bcrypt";
import { ResetPasswordVerificationEmail } from "./utils/reset-password";
import { orderRouter } from "./router/order.router";

configDotenv();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.post("/create-user", async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = await UserModel.create({ name, email, password: hashedPassword });
        res.status(200).send({ message: "user amjilttai uuslee", data: newUser });
    } catch (error) {
        res.status(500).send({ message: "Error", error });
    }
});

app.get("/get-users", async (req: Request, res: Response) => {
    const users = await UserModel.find({});
    res.status(200).send({ message: "users avlaa", data: users });
});

app.use('/users', userRouter);
app.use("/foods", foodRouter);
app.use("/foods-card", foodCardRouter);
app.use("/foods-category", foodCategoryRouter);
app.use("/foods-order", orderRouter);

app.post("/reset-password", async (req, res) => {
    const { email } = req.body;
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User oldsongui" });

    user.resetPasswordOtp = otpCode;
    user.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    const result = await ResetPasswordVerificationEmail(email, otpCode);

    if (result.success) {
        res.status(200).json({ message: "mail amjilttai ilgeelee" });
    } else {
        res.status(500).json({ message: "Aldaa garlaa", error: result.error });
    }
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