import { Article } from '@/components/article/Article';
import { CONTENT_TYPE_ID } from '@/constants';
import { client } from '@/clientContentful/client';
import s from './recentPosts.module.scss';

type ImageFieldType = { fields: { file: { url: string; title: string } } };

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
                {data.map(item => {
                    const datePublic = new Date(item.fields.date as string).toDateString();
                    return (
                        <Article
                            key={item.sys.id}
                            imagePath={`https://${(item.fields.image as ImageFieldType).fields.file.url}`}
                            title={item.fields.title as string}
                            description={item.fields.description as string}
                            tags={(item.fields.tag as string).split(',')}
                            author={item.fields.author as string}
                            date={datePublic}
                        />
                    );
                })}
            </div>
        </section>
    );
};
