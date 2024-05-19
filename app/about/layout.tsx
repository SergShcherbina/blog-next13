import Link from 'next/link';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={' px-3'}>
            <h1 className={' my-5 text-3xl  text-center'}>About Page</h1>
            <ul>
                <li>
                    <Link href='/about/contacts'> contacts </Link>
                </li>
                <li>
                    <Link href='/about/map'> map </Link>
                </li>
                <li>
                    <Link href='/about'> about </Link>
                </li>
            </ul>

            {children}
        </div>
    );
}
