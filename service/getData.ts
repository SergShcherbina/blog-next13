import { client } from '@/clientContentful/client';
import { CONTENT_TYPE_ID } from '@/constants';
import { IFields, IContentTypeId, IResponseGetPosts } from '@/types/getPostsType';
import { EntrySkeletonType } from 'contentful';

export const getData = {
    getPostsByText: async (searchText: string) => {
        const response = await client.getEntries<EntrySkeletonType<IFields & IContentTypeId>>({
            content_type: CONTENT_TYPE_ID.article,
            query: searchText,
        });
        return response.items.map(post => post.fields);
    },

    getPostBySlug: async (slug: string): Promise<IFields> => {
        const response = await client.getEntries<EntrySkeletonType<IFields & IContentTypeId>>({
            content_type: CONTENT_TYPE_ID.article,
            limit: 1,
            'fields.slug': slug,
        });
        return response.items[0].fields;
    },

    getPosts: async (limit = 4) => {
        const response = await client.getEntries<EntrySkeletonType<IFields & IContentTypeId>>({
            content_type: CONTENT_TYPE_ID.article,
            limit,
        });
        return response.items as unknown as IResponseGetPosts[];
    },
};
