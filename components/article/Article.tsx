import { ContentArticle } from '@/components/article/ui/content/ContentActicle';
import { ImageArticle } from '@/components/article/ui/image/ImadeActicle';

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

export const Article = (props: Props) => {
    const { imagePath, ...rest } = props;
    return (
        <article className={s.root}>
            <ImageArticle imagePath={imagePath} />
            <ContentArticle {...rest} />
        </article>
    );
};
