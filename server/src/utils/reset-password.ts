// import nodemailer from "nodemailer";
// import { configDotenv } from "dotenv";
// import { Resend } from "resend";

// configDotenv();

// const resend= new Resend(process.env.RESEND_API_KEY)
// const { AUTH_EMAIL, AUTH_PASS } = process.env;


// // const transport = nodemailer.createTransport({
// //   host: "smtp.gmail.com",
// //   port: 465, 
// //   secure: true, 
// //   auth: {
// //     user: process.env.AUTH_EMAIL,
// //     pass: process.env.AUTH_PASS,
// //   },
// //   tls: {
// //     rejectUnauthorized: false
// //   }
// // });
// export const ResetPasswordVerificationEmail = async (
//   reciever: string,
//   otpCode: string,
//   req: Request,
// ) => {
//   try {
//      await resend.emails.send({
//     // from: `"Food Delivery Team" <${AUTH_EMAIL}>`,
//     from : "onboarding@resend.dev",
//     to: reciever,
//     subject: "Nuuts ug sergeeh batalgaajuulah code",
//     html: `
//     <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f7f6;">
//       <div style="max-width: 500px; margin: auto; background: white; padding: 40px; border-radius: 15px;">
//         <h2 style="color: #333;">Nuuts ug sergeeh</h2>
//         <p>Batalgaajuulah code</p>
//         <div style="font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 5px; padding: 20px; border: 2px dashed #007bff; display: inline-block;">
//           ${otpCode}
//         </div>
//         <p style="color: #888; margin-top: 20px;">Ene code 10 min-iin daraa huchingui bolno</p>
//       </div>
//     </div>
//     `,
//   });
// console.log("Email sent:", info.messageId);
    
//     return { success: true }; 

//   } catch (error) {
//     console.error("Email error:", error);
    
//     return { success: false, error: error }; 
//   }
// };

// export default transport; 

import { configDotenv } from "dotenv";
import { Resend } from "resend";

configDotenv();

const resend = new Resend(process.env.RESEND_API_KEY);

export const ResetPasswordVerificationEmail = async (
  reciever: string,
  otpCode: string
) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: reciever,
      subject: "Нууц үг сэргээх баталгаажуулах код",
      html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f7f6;">
        <div style="max-width: 500px; margin: auto; background: white; padding: 40px; border-radius: 15px;">
          <h2 style="color: #333;">Нууц үг сэргээх</h2>
          <p>Баталгаажуулах код</p>
          <div style="font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 5px; padding: 20px; border: 2px dashed #007bff; display: inline-block;">
            ${otpCode}
          </div>
          <p style="color: #888; margin-top: 20px;">Энэ код 10 минутын дараа хүчингүй болно.</p>
        </div>
      </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error };
    }

    console.log("Email sent successfully:", data?.id);
    return { success: true, data };

  } catch (error) {
    console.error("Unexpected Email Error:", error);
    return { success: false, error };
  }
};