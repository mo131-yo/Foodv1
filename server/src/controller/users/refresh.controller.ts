import { Request, Response } from "express";

export const refresh = async (req: Request, res: Response) => {
    try {
        res.status(200).json({message: " Amjilttai shinchillee"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Aldaa garlaa" });
    }
}