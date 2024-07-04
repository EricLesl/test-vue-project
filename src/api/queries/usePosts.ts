import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import axios from 'axios'

export function usePosts() {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async () => getPosts(),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5 // 5 mins
  })

  const posts = computed(() => {
    return query.data.value?.slice(0, 5)
  })

  async function getPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log('API Response:', response.data)
    return response.data
  }

  return {
    ...query,
    posts
  }
}

export default usePosts
