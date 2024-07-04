import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import axios from 'axios'

export function usePosts() {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async () => getPosts(),
    refetchOnWindowFocus: true
  })

  const posts = computed(() => {
    console.log('Query Data:', query.data.value)
    return query.data.value
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
