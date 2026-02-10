import { Request, Response } from "express";
import { FoodCategoryModel } from "../../schema/Category.schema";

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        // Контроллер доторх кодыг ингэж өөрчлөөд хадгал:
        const deletedCategory = await (FoodCategoryModel as any).findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ 
                message: "Устгах категори олдсонгүй." 
            });
        }

        res.status(200).json({
            message: "Категори амжилттай устгагдлаа",
            data: deletedCategory
        });

    } catch (error) {
        console.error("Delete Category Error:", error);
        res.status(500).json({ message: "Серверийн алдаа гарлаа" });
    }
};