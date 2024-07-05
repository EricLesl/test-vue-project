import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { Posts } from '@/types/post'

export function usePostsQuery() {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async () => getPosts(),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5 // 5 mins
  })

  const posts = computed<Posts>(() => query.data.value ?? [])

  async function getPosts() {
    const response: AxiosResponse<Posts> = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return response.data
  }

  return {
    ...query,
    posts
  }
}

export default usePostsQuery
