"use client";

import useConvers from "@/app/hooks/useConvers";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItems from "./MobileItems";

const MobileFooterComponent: React.FC = () => {
  const routes = useRoutes();
  const { isOpened } = useConvers();

  if (isOpened) {
    return null;
  }

  return (
    <div
      className="
        fixed
        justify-between
        w-full
        bottom-0
        z-40
        flex
        items-center
        bg-white
         border-t-[1px]
         lg:hidden
        "
    >
        {routes.map((route) =>(
            <MobileItems  
                key={route.href}
                href={route.href}
                active={route.active}
                icon={route.icon}
                onClick={route.onClick}

            />
        
        ))}
    </div>
  );
};

export default MobileFooterComponent;
