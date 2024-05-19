export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
  if(!response.ok ) throw new Error('Failed to fetch getPosts')

  return response.json()
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`, {
  })
  if(!response.ok ) throw new Error('Failed to fetch getPostsBySearch')

  return response.json()
};