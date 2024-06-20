import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import Go from '@/assets/icons/Go';
import { blurDataURL } from '@/public/blurDataURL';

import s from './article.module.scss';

type Props = {
    imagePath: string;
    title: string;
    description: string;
    tags: string[];
    author: string;
    date: string;
    slug: string;
};

export const Article = ({ imagePath, title, description, tags, author, date, slug }: Props) => {
    return (
        <article className={s.root}>
            <div className={s.wrapperImage}>
                <Image
                    src={imagePath}
                    alt={'image'}
                    fill={true}
                    sizes='(max-width: 640px) 100vw, (max-width: 1280px) 974px, 723px'
                    placeholder={'blur'}
                    blurDataURL={blurDataURL}
                    className={s.image}
                />
            </div>

            <div className={s.content}>
                <div className={s.author}>
                    <cite>{author}</cite> &bull; <time>{date}</time>
                </div>

                <Link href={`/blog/${slug}`} className={clsx(s.content, 'group')}>
                    <div className={s.wrapperTitle}>
                        <h2 className={s.title}>{title}</h2>
                        <Go
                            className={`
                            ${s.icon}
                            group-hover:translate-y-[-5px]
                            group-hover:translate-x-[5px]
                            duration-150 ease-`}
                        />
                    </div>
                    <p className={s.description}>{description}</p>
                </Link>

                <div className={s.wrapperTags}>
                    {tags.map((item, i) => (
                        <span key={i}>{item}</span>
                    ))}
                </div>
            </div>
        </article>
    );
};
