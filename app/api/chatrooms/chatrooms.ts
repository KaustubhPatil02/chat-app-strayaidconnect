// import prisma from "@/app/libs/prismadb";
//  // adjust the path to your prismadb.ts file

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     const chatrooms = await prisma.conversation.findMany();
//     res.json(chatrooms);
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }