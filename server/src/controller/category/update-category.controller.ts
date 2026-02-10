// import { Request, Response } from "express";
// import { FoodCategoryModel } from "../../models/food.category.model";

// export const updateCategory = async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id;
//         const { categoryName, description } = req.body;

//         const category = await FoodCategoryModel.findOne({ _id: id });

//         if (!category) {
//             return res.status(404).json({ message: "Засах гэсэн категори олдсонгүй" });
//         }

//         if (categoryName !== undefined) {
//             category.categoryName = categoryName;
//         }
//         if (description !== undefined) {
//             category.description = description;
//         }

//         const updatedCategory = await category.save();

//         res.status(200).json({
//             message: "Амжилттай шинэчлэгдлээ",
//             data: updatedCategory
//         });

//     } catch (error: any) {
//         res.status(500).json({ 
//             message: "Шинэчлэхэд алдаа гарлаа", 
//             error: error.message 
//         });
//     }
// };
import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models/food.category.model";

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // const { categoryName, description } = req.body;

        // const query: FilterQuery<typeof FoodCategoryModel> = { _id: id };

        // const category = await FoodCategoryModel.findOne(query);

        // if (!category) {
        //     return res.status(404).json({ message: "Засах категори олдсонгүй" });
        // }

        // if (categoryName !== undefined) {
        //     category.categoryName = categoryName;
        // }
        // if (description !== undefined) {
        //     category.description = description;
        // }

        // await category.save();

        // res.status(200).json({
        //     message: "Амжилттай шинэчлэгдлээ",
        //     data: category
        // });
    } catch (error: any) {
        res.status(500).json({ message: "Алдаа гарлаа", error: error.message });
    }
};