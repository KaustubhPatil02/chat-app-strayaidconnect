// pages/api/send_sms.js
import prisma from "@/app/libs/prismadb";
import { NextResponse, NextRequest } from "next/server";


export async function POST(request: NextRequest) {
  // Parse the request body
  const Reqbody = await request.json();
  const { body, to } = Reqbody;

  // Fetch the chatroom with the specific ID and name
  try {
    const chatroom = await prisma.chatroom.findFirst({
      where: {
        id: '65e717566d518a6e35dc2928',
        name: 'Thane'
      }
    });

    // If the chatroom is not found, return an error
    if (!chatroom) {
      return NextResponse.json({ message: "Chatroom not found" }, { status: 404 });
    }

    // If the chatroom is found, return it
    return NextResponse.json(chatroom, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error fetching chatroom" }, { status: 500 });
  }
}