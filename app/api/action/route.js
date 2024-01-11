import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { action, slug, initialQuantity } = await request.json();
        const uri = "mongodb+srv://sun123:GO2lP8LIib7ikTDD@cluster0.d6kqifn.mongodb.net/";
        const client = new MongoClient(uri);

        try {
            const database = client.db('stock');
            const inventory = database.collection('inventory');
            const filter = { slug: slug };
            const newQuantity = action === "add" ? parseInt(initialQuantity) + 1 : parseInt(initialQuantity) - 1;
            const updateDoc = {
                $set: {
                    quantity: newQuantity
                },
            };
            const res = await inventory.updateOne(filter, updateDoc);

            if (res.matchedCount > 0 && res.modifiedCount > 0) {
                return NextResponse.json({ success: true, message: "Updated" });
            } else {
                return NextResponse.json({ success: false, message: "Product not found or not updated" });
            }
        } finally {
            await client.close();
        }
    } catch (error) {
        console.error("Error in updating quantity:", error);
        return NextResponse.json({ success: false, message: "Error updating quantity" });
    }
}
