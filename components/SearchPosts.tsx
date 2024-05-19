import { useState } from "react";
import { getPostsBySearch } from "@/service/getData";
import { PostType } from "@/app/blog/page";

type PropsType = {
  getSearchPosts: (posts: PostType[]) => void
}

export const SearchPosts = ({ getSearchPosts }: PropsType) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    getPostsBySearch(search)
      .then(posts => {
      getSearchPosts(posts);
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={"py-3"}
    >
      <input
        type="text"
        placeholder={'search post'}
        onChange={(event) => setSearch(event.target.value)}
        className={" border px-3 py-2 font-medium rounded-l-lg"}
      />
      <button
        type="submit"
        className={' border rounded-r-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900'}
      > Search
      </button>
    </form>
  )
}