import { Metadata } from "next";

type ParamsType = {
  params: {
    id: string
  }
}

const getData = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
  return response.json()
}

export const generateMetadata = async ({ params: { id} }: ParamsType): Promise<Metadata> => {
  const { title } = await getData(id)
  return {
    title: `${title} | Next-13 App`,
    // description: 'Generated by create next app',
  }
}

const Post = async ({ params: {id} }: ParamsType) => {
  const post = await getData(id)

  return (
    <div>
      <h1 className={" text-3xl border-b py-3 text-center"}>{post.title}</h1>
      <p className={" "}>{post.body}</p>
    </div>
  )
}
export default Post;