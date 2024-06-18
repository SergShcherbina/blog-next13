import { createWithEqualityFn } from 'zustand/traditional';
import { getData } from '@/service/getData';
import { shallow } from 'zustand/shallow';
import { IFields } from '@/types/getPostsType';

export type PostsTypeStore = {
    posts: IFields[];
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
                    posts: await getData.getPosts(10).then(data => data.map(item => item.fields)),
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
