'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
    title: string;
    href: string;
};

type Props = {
    navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
    const pathName = usePathname();

    return (
        <nav className={'p-3 flex justify-center bg-neutral-800 text-gray-50 '}>
            {navLinks.map(link => {
                const isActive = pathName === link.href;
                return (
                    <Link
                        key={link.title}
                        href={link.href}
                        className={`${isActive && 'underline'} rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 `}
                    >
                        {link.title}
                    </Link>
                );
            })}
        </nav>
    );
};
