import { Metadata } from 'next';
import { client } from '@/clientContentful/client';
import { CONTENT_TYPE_ID } from '@/constants';
import { IArticleFields } from '@/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

type ParamsType = {
    params: {
        slug: string;
    };
};

async function getPostBySlug(slug: string) {
    const res = await client.getEntries({ content_type: CONTENT_TYPE_ID.article, limit: 1, 'fields.slug': slug });
    return res.items[0].fields as unknown as IArticleFields;
}

export const generateMetadata = async ({ params: { slug } }: ParamsType): Promise<Metadata> => {
    const data = await getPostBySlug(slug);

    return {
        title: `${data.title} | Next-13 App`,
        description: `${data.description}`,
    };
};

export default async function ArticlePage({ params: { slug } }: ParamsType) {
    const data = await getPostBySlug(slug);

    return (
        <article>
            <Image
                src={`https:${data.image.fields.file!.url}`}
                alt={data.image.fields.title as string}
                width={500}
                height={500}
                className={'mx-auto'}
            />
            <h1 className={'text-center text-3xl py-3'}>{data.title}</h1>
            <div>{documentToReactComponents(data.text!)}</div>
        </article>
    );
}

// Generate Static Params for Pages
export async function generateStaticParams({ params: { slug } }: ParamsType) {
    const posts = await client.getEntries({ content_type: CONTENT_TYPE_ID.article, 'fields.slug': slug });
    return posts.items.map((post: any) => ({
        slug: post.fields.slug,
    }));
}
