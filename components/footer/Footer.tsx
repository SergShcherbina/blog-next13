import Link from 'next/link';
import s from './footer.module.scss';

const dataFooter = [
    {
        social: 'Twitter',
        link: '#',
    },
    {
        social: 'LinkedIn',
        link: '#',
    },
    {
        social: 'Email',
        link: '#',
    },
    {
        social: 'RSS feed',
        link: '#',
    },
    {
        social: 'Add to Feedly',
        link: '#',
    },
];

export function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <span>&copy; {date}</span>
                {dataFooter.map((item, i) => (
                    <Link key={i} href={item.link} className={s.link}>
                        {item.social}
                    </Link>
                ))}
            </div>
        </footer>
    );
}
