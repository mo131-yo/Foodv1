import { models, model, Schema, ObjectId} from "mongoose";

type FoodCategory = {
    id?: ObjectId;
    categoryName: string;
    description: string;
}

const FoodCategorySchema = new Schema<FoodCategory>({
    id: { type: Schema.Types.ObjectId, required: false },
    categoryName: { type: String, required: true, unique: true},
    description: { type: String},
},
{timestamps: true},
)
export const FoodCategoryModel = models["FoodCategory"] || model("FoodCategory", FoodCategorySchema);