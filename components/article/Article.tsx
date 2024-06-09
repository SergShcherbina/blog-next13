// 'use client';
import Image from 'next/image';
import s from './article.module.scss';

type Props = {
    imagePath: string;
    title: string;
    description: string;
    tags: string[];
    author: string;
    date: string;
};

export const Article = ({ imagePath, title, description, tags, author, date }: Props) => {
    return (
        <article className={s.root}>
            <Image src={imagePath} alt={'image'} className={s.image} />
            <div className={s.content}>
                <div className={s.author}>
                    <cite>{author}</cite> &bull; <time>{date}</time>
                </div>
                <h2 className={s.title}>{title}</h2>
                <p className={s.description}>{description}</p>
                <div className={s.wrapperTags}>
                    {tags.map((item, i) => (
                        <span key={i}>{item}</span>
                    ))}
                </div>
            </div>
        </article>
    );
};
