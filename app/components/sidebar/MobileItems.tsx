'use client';

import Link from "next/link";
import clsx from "clsx";

interface MobileItemsProps {
    href: string;
    // label: string;
    icon: any;
    active: boolean;
    onClick?: () => void;
}

const MobileItems: React.FC<MobileItemsProps> = ({
    href,
    // label,
    icon: Icon,
    active,
    onClick,
}) => {

    const handleClick = () => {
        if(onClick) {
            return onClick();
        }
    };
  return (
    <Link 
        onClick={onClick}
        href={href}
        className={clsx(
            `group
            flex
            gap-x-3
            test-sm
            leading-6
            font-semibold
            w-full
            justify-center
            p-4
            text-gray-500
            hover:text-black
            hover:bg-gray-200
            `,
            active && 'bg-gray-100 text-black'
        )}
    >
        <Icon className="h-10 w-8" />
    </Link>
  );
};

export default MobileItems;
