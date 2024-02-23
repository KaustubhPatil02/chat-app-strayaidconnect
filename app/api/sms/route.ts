// pages/api/send_sms.js
import twilio from "twilio";
import { NextResponse, NextRequest } from "next/server";

// To handle a GET request to /api
export async function POST(request: NextRequest) {
  // Do whatever you want
  // return NextResponse.json({ message: "Hello World" }, { status: 200 });
  const Reqbody = await request.json();
  const { body, to } = Reqbody;
  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  try {
    await client.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    return NextResponse.json({ message: "Successcful" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "UnSuccesscful" }, { status: 200 });
  }
  console.log(body);
  // console.log(request.body);
  return NextResponse.json(request.body, { status: 200 });
}

// export default async function handler(req: { body: { body: any; to: any; }; method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success?: boolean; error?: string; }): void; new(): any; }; }; }) {
//   const { body, to } = req.body;

//   if (req.method === 'POST') {
//     const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

//     try {
//       await client.messages.create({
//         body,
//         from:process.env.TWILIO_PHONE_NUMBER,
//         to:919834388054
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       res.status(500).json({ error: 'Error sending SMS' });
//     }
//   } else {
//     res.status(405).json({ error: 'We only support POST' });
//   }
// }

// pages/api/send_sms.js
// import Vonage from "@vonage/server-sdk";
// import { NextResponse, NextRequest } from "next/server";

// // Initialize Vonage
// const vonage = new Vonage({
//   apiKey: process.env.VONAGE_API_KEY,
//   apiSecret: process.env.VONAGE_API_SECRET
// });

// // To handle a POST request to /api
// export async function POST(request: NextRequest) {
//   const Reqbody = await request.json();
//   const { body, to } = Reqbody;

//   try {
//     const result = await new Promise((resolve, reject) => {
//       vonage.message.sendSms(
//         process.env.VONAGE_BRAND_NAME, // From
//         to, // To
//         body, // Message
//         (err: any, responseData: any) => {
//           if (err) {
//             reject(err);
//           } else {
//             if(responseData.messages[0]['status'] === "0") {
//               resolve({ message: "Successful" });
//             } else {
//               reject(new Error(`Message failed with error: ${responseData.messages[0]['error-text']}`));
//             }
//           }
//         }
//       );
//     });

//     return NextResponse.json(result);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Unsuccessful" }, { status: 500 });
//   }
// }