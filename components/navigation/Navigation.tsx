'use client';

import cn from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import s from './navigation.module.scss';

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
        <nav className={s.nav}>
            {navLinks.map(link => {
                const isActive = pathName === link.href;
                return (
                    <Link key={link.title} href={link.href} className={cn(s.link, isActive && 'underline')}>
                        {link.title}
                    </Link>
                );
            })}
        </nav>
    );
};
