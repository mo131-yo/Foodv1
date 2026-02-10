import mongoose, {models, Schema} from "mongoose"; 


interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  foods: { food: mongoose.Types.ObjectId }[];
  totalPrice: number;
  address: string;
  status: string;
}

export const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    foods: [{ food: { type: Schema.Types.ObjectId, ref: "Food", required: true },}],
    totalPrice: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, 
        enum: ["Pending", "Processing", "Delivered", "Cancelled"], 
        default: "Pending" 
    },
}, { timestamps: true });
export const OrderModel = models["Order"] || mongoose.model("Order", OrderSchema);

