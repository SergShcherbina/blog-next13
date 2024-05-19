"use client";

import { useState } from "react";
import { usePosts } from "@/store/postsStore";

export const SearchPosts = () => {
  const [getPostsBySearch] = usePosts(state => [state.getPostsByText])
  const [search, setSearch] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    getPostsBySearch(search)
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