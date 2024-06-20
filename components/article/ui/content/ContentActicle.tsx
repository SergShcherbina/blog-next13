import { LinkArticle } from '@/components/article/ui/content/link/LinkArticle';

import s from './ContentArticle.module.scss';

type PropsType = {
    title: string;
    description: string;
    slug: string;
    author: string;
    date: string;
    tags: string[];
};

export const ContentArticle = ({ slug, title, description, author, date, tags }: PropsType) => {
    return (
        <div className={s.content}>
            <div className={s.author}>
                <cite>{author}</cite> &bull; <time>{date}</time>
            </div>

            <LinkArticle title={title} description={description} slug={slug} />

            <div className={s.wrapperTags}>
                {tags.map((item, i) => (
                    <span key={i}>{item}</span>
                ))}
            </div>
        </div>
    );
};
