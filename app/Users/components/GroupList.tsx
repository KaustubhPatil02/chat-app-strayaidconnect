'use client';


import { Conversation } from "@prisma/client";

import GroupBox from "./GroupBox"

interface GroupListProps {
  items: Conversation[];
}

const GroupList: React.FC<GroupListProps> = ({ 
  items, 
}) => {
  return ( 
    <aside 
      className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200
        block w-full left-0
      "
    >
      <div className="px-5">
        <div className="flex-col">
          <div 
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
            "
          >
            Groups
          </div>
        </div>
        {items.map((item) => (
          <GroupBox
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </aside>
  );
}
 
export default GroupList;
