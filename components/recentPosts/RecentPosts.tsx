import { CONTENT_TYPE_ID } from '@/constants';
import { client } from '@/clientContentful/client';
import { ListArticle } from '@/components/listArticle/ListArticle';
import s from './recentPosts.module.scss';

async function fetchCardData() {
    const data = await client.getEntries<any>({
        content_type: CONTENT_TYPE_ID.article,
        limit: 4,
    });
    return data.items;
}

export const RecentPosts = async () => {
    const data = await fetchCardData();

    return (
        <section className={s.root}>
            <h2 className={s.title}>{'Recent posts'}</h2>
            <div className={s.wrapperArticles}>
                <ListArticle data={data} />
            </div>
        </section>
    );
};
