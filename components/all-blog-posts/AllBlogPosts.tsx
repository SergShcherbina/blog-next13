import { ListArticle } from '@/components/list-article/ListArticle';
import { getData } from '@/service/getData';

import s from './allBlogPosts.module.scss';

export const AllBlogPosts = async () => {
    const data = await getData.getPosts(8);

    return (
        <section className={s.root}>
            <h3 className={s.title}>All Blog Posts</h3>
            <div className={s.wrapperArticles}>
                <ListArticle data={data} />
            </div>
        </section>
    );
};
