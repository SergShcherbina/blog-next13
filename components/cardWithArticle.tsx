import Link from 'next/link';
import { client } from '@/clientContentful/client';
import { CONTENT_TYPE_ID } from '@/constants';
import { IArticleFields } from '@/contentful';

type CardType = {
    contentTypeId: CONTENT_TYPE_ID.article;
    fields: IArticleFields;
};
type ImageFieldType = { fields: { file: { url: string; title: string } } };

async function fetchCardData() {
    const data = await client.getEntries<CardType>({
        content_type: CONTENT_TYPE_ID.article,
    });
    return data.items;
}

export const CardWithArticle = async () => {
    const data = await fetchCardData();

    return (
        <div className={'flex flex-wrap gap-3'}>
            {data.map(item => (
                <article key={item.sys.id} className={'p-3 w-[300px] h-min border rounded-lg shadow-md '}>
                    <h3>{item.fields.title}</h3>
                    <div className={'h-32 w-full'}>
                        <img
                            src={(item.fields.image as ImageFieldType).fields.file.url}
                            alt={(item.fields.image as ImageFieldType).fields.file.title}
                            className={'h-full w-full object-cover'}
                        />
                    </div>
                    <p>{item.fields.description}</p>
                    <Link
                        href={`/blog/${item.fields.slug}`}
                        className={'block mt-3 p-2 text-center rounded-md bg-gray-200 hover:bg-gray-300 '}
                    >
                        {item.fields.buttonText}
                    </Link>
                </article>
            ))}
        </div>
    );
};
