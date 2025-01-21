import { NextResponse } from "next/server";
import db from '@/lib/db.json';
import { UpdateBookSchema } from "@/types";
import fs from 'fs';
import path from 'path';

export async function GET(request: Request, { params }: { params: { barcode: string } }) {
    const barcode = params.barcode;
    console.log(barcode);
    const book = db.books.find((book) => book.barcode === barcode);
    if (!book) {
        return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }
    const delay = Math.floor(Math.random() * 500) + 1; //random delay for the api to simulate a slow responses
    await new Promise(resolve => setTimeout(resolve, delay));
    return NextResponse.json(book);
}

export async function PATCH(request: Request, { params }: { params: { barcode: string } }) {
    const barcode = params.barcode;
    const book = db.books.find((book) => book.barcode === barcode);
    if (!book) {
        return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    const body = await request.json();
    const parsedBook = UpdateBookSchema.parse(body);

    const updatedBook = { ...book, ...parsedBook };
    db.books = db.books.map((book) => book.barcode === barcode ? updatedBook : book);
    
    const dbPath = path.join(process.cwd(), 'lib', 'db.json');
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    const delay = Math.floor(Math.random() * 500) + 1;
    await new Promise(resolve => setTimeout(resolve, delay));
    return NextResponse.json(updatedBook); 
}

