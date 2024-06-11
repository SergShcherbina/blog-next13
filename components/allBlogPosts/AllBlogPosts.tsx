import { client } from '@/clientContentful/client';
import { CONTENT_TYPE_ID } from '@/constants';
import { ListArticle } from '@/components/listArticle/ListArticle';
import s from './allBlogPosts.module.scss';

async function fetchCardData() {
    const data = await client.getEntries<any>({
        content_type: CONTENT_TYPE_ID.article,
        limit: 8,
    });
    return data.items;
}

export const AllBlogPosts = async () => {
    const data = await fetchCardData();

    return (
        <section className={s.root}>
            <h3 className={s.title}>All Blog Posts</h3>
            <div className={s.wrapperArticles}>
                <ListArticle data={data} />
            </div>
        </section>
    );
};
