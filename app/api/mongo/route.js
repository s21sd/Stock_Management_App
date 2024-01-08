import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    const uri = "mongodb+srv://sun123:GO2lP8LIib7ikTDD@cluster0.d6kqifn.mongodb.net/";
    const client = new MongoClient(uri);
    try {
        const database = client.db('myblogs');
        const movies = database.collection('blogs');
        const query = {};
        const movie = await movies.find(query).toArray();
        return NextResponse.json({ "a": 32, movie })

    } finally {
        await client.close();
    }
}
