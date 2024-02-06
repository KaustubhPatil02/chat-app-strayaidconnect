import prisma from "@/app/libs/prismadb";

const getMessages = async (
  conversationsId: string
) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationsId: conversationId
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    return messages;
  } catch (error: any) {
    return [];
  }
};

export default getMessages;
