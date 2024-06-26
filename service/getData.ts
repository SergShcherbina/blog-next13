import { EntrySkeletonType } from 'contentful';

import { client } from '@/clientContentful/client';
import { CONTENT_TYPE_ID } from '@/constants';
import { IArticleFields } from '@/contentful';
import { IContentTypeId, IPosts, IResponseData } from '@/types/getPostsType';

export const getData = {
    getPostsByText: async (searchText: string) => {
        const response = await client.getEntries<EntrySkeletonType<IArticleFields & IContentTypeId>>({
            content_type: CONTENT_TYPE_ID.article,
            query: searchText,
        });
        return response.items.map(post => post.fields);
    },

    getPostBySlug: async (slug: string): Promise<IArticleFields> => {
        const response = await client.getEntries<EntrySkeletonType<IArticleFields & IContentTypeId>>({
            content_type: CONTENT_TYPE_ID.article,
            limit: 1,
            'fields.slug': slug,
        } as any);
        return response.items[0].fields;
    },

    getPosts: async (limit = 4) => {
        const response = await client.getEntries<EntrySkeletonType<IArticleFields & IContentTypeId>>({
            content_type: CONTENT_TYPE_ID.article,
            limit,
        });
        return response as unknown as IResponseData<IPosts>;
    },
};
