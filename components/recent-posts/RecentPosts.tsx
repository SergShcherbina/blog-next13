import { ListArticle } from '@/components/list-article/ListArticle';
import { getData } from '@/service/getData';

import s from './recentPosts.module.scss';

export const RecentPosts = async () => {
    const data = await getData.getPosts();

    return (
        <section className={s.root}>
            <h2 className={s.title}>{'Recent posts'}</h2>
            <div className={s.wrapperArticles}>
                <ListArticle data={data} />
            </div>
        </section>
    );
};
