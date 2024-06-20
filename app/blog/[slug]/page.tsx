import { client } from '@/clientContentful/client';
import { CONTENT_TYPE_ID } from '@/constants';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getData } from '@/service/getData';
import { blurDataURL } from '@/public/blurDataURL';
import s from './post-page.module.scss';

type ParamsType = {
    params: {
        slug: string;
    };
};

export default async function PostPage({ params: { slug } }: ParamsType) {
    const post = await getData.getPostBySlug(slug);

    return (
        <article>
            <div className={s.wrapperImg}>
                <Image
                    src={`https:${post.image.fields.file?.url}`}
                    alt={post.image.fields.title as string}
                    fill={true}
                    sizes={'(max-width: 640px) 100vw, 1200px'}
                    priority={true}
                    className={s.image}
                    placeholder={'blur'}
                    blurDataURL={blurDataURL}
                />
            </div>
            <h1 className={s.title}>{post.title}</h1>
            <div className={s.text}>{documentToReactComponents(post.text)}</div>
        </article>
    );
}

export async function generateStaticParams() {
    const posts = await client.getEntries<any>({
        content_type: CONTENT_TYPE_ID.article,
    });
    return posts.items.map((post: any) => ({
        slug: post.fields.slug,
    }));
}
