// import { PrismaClient } from "@prisma/client"

// declare global {
//   var prisma: PrismaClient | undefined
// }

// const client = globalThis.prisma || new PrismaClient()
// if (process.env.NODE_ENV !== "production") globalThis.prisma = client

// export default client
// old code

import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma

// async function main() {
//   await prisma.conversation.createMany({
//     data: [
//       { name: 'Chatroom 1', isGroup: true },
//       { name: 'Chatroom 2', isGroup: true },
//       { name: 'Chatroom 3', isGroup: true },
//     ],
//   })
// }
async function main() {
  const existingChatrooms = await prisma.conversation.findMany({
    where: {
      OR: [
        { name: 'StrayAidConnect- Vasai-Virar' },
        { name: 'StrayAidConnect- Mumbai' },
        { name: 'StrayAidConnect- Thane' },
      ],
    },
  });

  if (existingChatrooms.length === 0) {
    await prisma.conversation.createMany({
      data: [
        { name: 'StrayAidConnect- Vasai-Virar', isGroup: true },
        { name: 'StrayAidConnect- Mumbai', isGroup: true },
        { name: 'StrayAidConnect- Thane', isGroup: true },
      ],
    });
  }
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

export default prisma