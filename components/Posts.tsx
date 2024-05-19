"use client";

import Link from "next/link";
import { PostType } from "@/app/blog/page";
import { usePosts } from "@/store/postsStore";
import { useEffect } from "react";

export const Posts = () => {
  const [posts, getPosts, loading] = usePosts(state => [
    state.posts, state.getPosts, state.loading])

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <>
      {loading
        ?
        <p>Loading...</p>
        :
        <ul >
          {posts.map((post: PostType) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`} className={" hover:text-orange-500 hover:translate-x-0.5"}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      }
    </>

  )
}