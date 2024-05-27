import { Navigation } from './Navigation';
import Link from 'next/link';
import { auth } from '@/configs/auth';

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
        <header className={'p-3 flex bg-neutral-800 text-gray-50 items-center'}>
            <Navigation navLinks={links} />
            {session ? (
                children
            ) : (
                <Link
                    href={'/signin'}
                    className={`rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900`}
                >
                    Sign in
                </Link>
            )}
        </header>
    );
};
