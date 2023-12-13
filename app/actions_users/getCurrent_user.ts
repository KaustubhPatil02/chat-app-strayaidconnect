import prisma from '@/app/libs/prismadb';
import getSession from './getSession';


const getCurr_user = async () =>{
    try {
        const session = await getSession();

        if(!session?.user?.email) {
            return null;
        }

        const curr_user = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if (!curr_user) {
            return null
        }
        return curr_user;
    } catch (error: any) {
        return null;
    }
}

export default getCurr_user;