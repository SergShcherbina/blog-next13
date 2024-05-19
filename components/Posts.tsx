import Link from "next/link";
import { PostType } from "@/app/blog/page";

export const Posts = ({posts}: {posts: PostType[]}) => {
  return (
    <ul >
      {posts.map((post: PostType) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`} className={" hover:text-orange-500 hover:translate-x-0.5"}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}