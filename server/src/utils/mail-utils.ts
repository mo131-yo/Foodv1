import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";

configDotenv();

const { AUTH_EMAIL ,AUTH_PASS} = process.env;

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});
 


    export const verifyUserEmail = async (receiver: string, verifiLink: string) => {
        await transport.sendMail({
            from: `Foods <${AUTH_EMAIL}>`,
            to: receiver,
            subject: "Verify user",
            html: `<p>Click <a href="${verifiLink}">here</a> to verify your email.</p>`
        })
    }