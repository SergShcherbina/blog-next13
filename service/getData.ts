
import {client} from "@/clientContentful/client";
import {IArticleFields} from "@/contentful";
import {CONTENT_TYPE_ID} from "@/constants";

export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        },
    });
    if (!response.ok) throw new Error('Failed to fetch getPosts');

    return response.json();
};

export const getPostsBySearch = async (search: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`, {});
    if (!response.ok) throw new Error('Failed to fetch getPostsBySearch');

    return response.json();
};

export const getPostById = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60,
        },
    });
    return response.json();
};

export const getData = {
     getPostsByText: async (searchText: string) => {
        const response = await client.getEntries<any>({
            content_type: CONTENT_TYPE_ID.article,
            query: searchText,
        });
        const arrData: string[] = response.items.map((post: any) => post.fields.title)
        return arrData as unknown as string[];
    },

     getPostBySlug: async (slug: string) => {
        const response = await client.getEntries<any>({
            content_type: CONTENT_TYPE_ID.article,
            limit: 1,
            'fields.slug': slug,
        });
        return response.items[0].fields as unknown as IArticleFields;
    },
    getPosts: async (limit = 4) => {
        const response = await client.getEntries<any>({
            content_type: CONTENT_TYPE_ID.article,
            limit
        });
        return response.items as unknown as IArticleFields[];
    },
}
