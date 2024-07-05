// usePostsQuery.ts
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

async function fetchPosts() {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  return response.data
}

export function usePostsQuery() {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5 // 5 mins
  })
}
