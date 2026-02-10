import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models/food.category.model";

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const { categoryName, description } = req.body;

        // 1. findByIdAndUpdate ашиглах нь хамгийн хурдан бөгөөд аюулгүй арга
        // { new: true } нь шинэчлэгдсэн өгөгдлийг буцааж авна гэсэн үг
        const updatedCategory = await (FoodCategoryModel as any).findByIdAndUpdate(
            categoryId,
            { categoryName, description },
            { new: true, runValidators: true }
        );

        // 2. Хэрэв ийм ID-тай категори байхгүй бол     
        if (!updatedCategory) {
            return res.status(404).json({ message: "Засах категори олдсонгүй" });
        }

        res.status(200).json({
            message: "Амжилттай шинэчлэгдлээ",
            data: updatedCategory
        });

    } catch (error: any) {
        console.error("Update Error:", error.message);
        res.status(500).json({ 
            message: "Алдаа гарлаа", 
            error: error.message 
        });
    }
};