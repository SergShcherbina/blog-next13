import { create } from "zustand";
import { PostType } from "@/app/blog/page";
import { getPosts, getPostsBySearch } from "@/service/getData";

export type PostsTypeStore = {
  posts: PostType[];
  loading: boolean;
  error: Error | null
  getPosts: () => void
  getPostsByText: (search: string) => void
}

export const usePosts = create<PostsTypeStore>()(set => ({
  posts: [],
  loading: false,
  error: null,
  getPosts: async () => {
    set({loading: true})
    try {
      set({posts: await getPosts()})
    } catch(error: Error | any) {
      set({error: error.message})
    } finally {
      set({loading: false})
    }
  },
  getPostsByText: async (search: string) => {
    set({loading: true})
    try {
      set({posts: await getPostsBySearch(search)})
    } catch(error: Error | any) {
      set({error: error.message})
    } finally {
      set({loading: false})
    }
  },
}))