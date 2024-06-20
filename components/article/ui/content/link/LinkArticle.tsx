import clsx from 'clsx';
import Link from 'next/link';

import Go from '@/assets/icons/Go';

import s from './LinkArticle.module.scss';

type PropsType = {
    title: string;
    description: string;
    slug: string;
};

export const LinkArticle = ({ title, description, slug }: PropsType) => {
    return (
        <Link href={`/blog/${slug}`} className={clsx(s.linkArticle, 'group')}>
            <div className={s.wrapperTitle}>
                <h2 className={s.title}>{title}</h2>
                <Go
                    className={`
                            ${s.icon}
                            group-hover:translate-y-[-5px]
                            group-hover:translate-x-[5px]
                            duration-200 ease-in-out `}
                />
            </div>
            <p className={s.description}>{description}</p>
        </Link>
    );
};
