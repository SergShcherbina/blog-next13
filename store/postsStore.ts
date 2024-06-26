import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { IArticleFields } from '@/contentful';
import { getData } from '@/service/getData';

export type PostsTypeStore = {
    posts: IArticleFields[];
    loading: boolean;
    error: Error | null;
    getPosts: () => void;
    getPostsByText: (search: string) => void;
};

export const usePosts = createWithEqualityFn<PostsTypeStore>()(
    set => ({
        posts: [],
        linkToPosts: null,
        loading: false,
        error: null,
        getPosts: async () => {
            set({
                loading: true,
            });
            try {
                set({
                    posts: await getData.getPosts(10).then(data => data.items.map(item => item.fields)),
                });
            } catch (error: Error | any) {
                set({
                    error: error.message,
                });
            } finally {
                set({
                    loading: false,
                });
            }
        },
        getPostsByText: async (search: string) => {
            set({
                loading: true,
            });
            try {
                set({
                    posts: await getData.getPostsByText(search),
                });
            } catch (error: Error | any) {
                set({
                    error: error.message,
                });
            } finally {
                set({
                    loading: false,
                });
            }
        },
    }),
    shallow
);
