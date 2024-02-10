import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers, HiOutlineUser } from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: HiChat,
      active: pathname === '/conversations' || !!conversationId
    },
    { 
      label: 'Chatrooms', 
      href: '/Chatrooms', 
      icon: HiUsers, 
      active: pathname === '/Chatrooms'
    },
    { 
      label: 'View Volunteers', 
      href: '/Users', 
      icon: HiOutlineUser, 
      active: pathname === '/Users'
    },
    {
      label: 'Logout', 
      onClick: () => signOut(),
      href: '#',
      icon: HiArrowLeftOnRectangle, 
    }
    
  ], [pathname, conversationId]);

  return routes;
};

export default useRoutes;
