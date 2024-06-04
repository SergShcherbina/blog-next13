import { Metadata } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '@/clientContentful/client';
import { IMainFields } from '@/contentful';
import { CardWithArticle } from '@/components/cardWithArticle';
import { CONTENT_TYPE_ID } from '@/constants';

async function fetchPostData() {
    const data = await client.getEntries({ content_type: CONTENT_TYPE_ID.main, limit: 1 });
    return data.items[0].fields as unknown as IMainFields;
}

export const generateMetadata = async (): Promise<Metadata> => {
    const { title, description } = await fetchPostData();
    return {
        title: `${title} | Next App`,
        description: description,
    };
};

export default async function Post() {
    const data = await fetchPostData();
    const image = data.image?.fields.file?.url;

    return (
        <section>
            <div
                style={{ backgroundImage: `url(http:${image})` }}
                className='bg-cover bg-center h-64 w-full text-white flex flex-col justify-center items-center'
            >
                <h1 className={'text-3xl font-bold sm:text-4xl '}>{data.title}</h1>
                <h2 className={'text-xl'}>{data.description}</h2>
            </div>
            <div className={'py-3 md:px-1'}>{documentToReactComponents(data.body!)}</div>

            <CardWithArticle />
        </section>
    );
}
