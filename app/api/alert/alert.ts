// // pages/api/send_sms.js
// import twilio from "twilio";
// import { NextResponse, NextRequest } from "next/server";

// // To handle a GET request to /api
// export async function POST(request: NextRequest) {
//   // Do whatever you want
//   // return NextResponse.json({ message: "Hello World" }, { status: 200 });
//   const Reqbody = await request.json();
//   const { body, to } = Reqbody;
//   const client = twilio(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN
//   );
//   try {
//     await client.messages.create({
//       body,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to,
//     });
//     return NextResponse.json({ message: "Successcful" }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "UnSuccesscful" }, { status: 200 });
//   }
//   console.log(body);
//   // console.log(request.body);
//   return NextResponse.json(request.body, { status: 200 });
// }

