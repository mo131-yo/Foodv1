import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  // name: { type: String, required: [true, "Category name is required"], unique: true, trim: true },
  categoryName: { type: String, required: true },
    description: { type: String, required: true },
    isDeleted: { type: Boolean, default: false }
},
{timestamps: true},
);

export const FoodCategoryModel = mongoose.models.Category || mongoose.model("Category", CategorySchema);
