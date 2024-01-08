import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    const uri = "mongodb+srv://sun123:GO2lP8LIib7ikTDD@cluster0.d6kqifn.mongodb.net/";
    const client = new MongoClient(uri);
    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        const query = {};
        const allProduct = await inventory.find(query).toArray();
        
        return NextResponse.json({ success: true, allProduct })
    } finally {
        await client.close();
    }
}
export async function POST(request) {
    const body = await request.json();
    console.log(body);
    const uri = "mongodb+srv://sun123:GO2lP8LIib7ikTDD@cluster0.d6kqifn.mongodb.net/";
    const client = new MongoClient(uri);
    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        const product = await inventory.insertOne(body);
        return NextResponse.json({ product, ok: true })
    } finally {
        await client.close();
    }
}
