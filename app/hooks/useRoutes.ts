import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import Loading from '../conversations/loading'; // import your loading component

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
  };

  const routes = useMemo(() => [
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: HiChat,
      active: pathname === '/conversations' || !!conversationId
    },
    { 
      label: 'Members ', 
      href: '/users', 
      icon: HiUsers, 
      active: pathname === '/users'
    },
    {
      label: isLoading ? 'Loading...' : 'Logout', 
      onClick: handleSignOut,
      href: '#',
      icon: isLoading ? Loading : HiArrowLeftOnRectangle, 
    }
  ], [pathname, conversationId, isLoading]);

  return routes;
};

export default useRoutes;