import { Resend } from "resend";
import { configDotenv } from "dotenv";

configDotenv();


const resend = new Resend(process.env.RESEND_API_KEY);

export const verifyUserEmail = async (receiver: string, verifyLink: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: receiver,
      subject: "Burtgel batalgaajlaa",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Тавтай морил!</h2>
          <p>Link ni deer darj burtgelee batalgaajuul</p>
          <a href="${verifyLink}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;"></a>
        </div>
      `,
    });

    if (error) {
      console.error("Signup Email Error:", error);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    console.error("Unexpected Signup Email Error:", err);
    return { success: false, err };
  }
};
