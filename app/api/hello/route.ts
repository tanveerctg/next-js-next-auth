import { NextResponse, NextRequest } from "next/server";
import { db } from "@vercel/postgres";
export async function GET(request: NextRequest) {
  const client = await db.connect();

  try {
    await client.sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;
    const names = ["Fiona", "Lucy"];
    await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
  } catch (error) {
    return NextResponse.json({ error });
  }

  const pets = await client.sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets });
}
