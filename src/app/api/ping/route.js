import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/mongoose";

export function GET() {
  dbConnect()
  return NextResponse.json({ hello: "world" });
}