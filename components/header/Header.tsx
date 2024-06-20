import Link from 'next/link';

import { auth } from '@/configs/auth';

import { Navigation } from '../navigation/Navigation';
import s from './header.module.scss';

type LinkType = {
    title: string;
    href: string;
};

const links: LinkType[] = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Blog',
        href: '/blog',
    },
    {
        title: 'About',
        href: '/about',
    },
];

export const Header = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();

    return (
        <header className={s.header}>
            {session ? (
                children
            ) : (
                <Link href={'/signin'} className={s.link}>
                    Sign in
                </Link>
            )}
            <Navigation navLinks={links} />
        </header>
    );
};
