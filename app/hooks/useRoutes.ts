import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUser } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConvers from "./useConvers";

const useRoutes = () => {
    const pathname = usePathname();
    const {conversationId} = useConvers();

    const routes = useMemo(() => [{
        label: 'Chat',
        href: '/convers',
        icon: HiChat,
        active: pathname === '/convers' || !!conversationId
    },
    
    {
        label: 'Users',
        href: '/Users',
        icon: HiUser,
        active: pathname === '/Users'
    }, 
    {
        label: 'LogOut',
        href: '#',
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle
    }], [conversationId, pathname]);

    return routes;
}
export default useRoutes;