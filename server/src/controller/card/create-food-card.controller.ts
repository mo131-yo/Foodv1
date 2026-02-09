import { Request, Response} from "express";
import { CardModel } from "../../models";

export const createFoodCard = async (req: Request, res: Response) => {
    try {
        const { title, description, price } = req.body;

        const newCard = await CardModel.create({title, description, price});
        
        res.status(201).json({message: "Card amjilttai burtgegdlee", data: newCard});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Aldaa garlaa" });
    }
};