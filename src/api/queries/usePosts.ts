import { useQuery } from '@tanstack/vue-query'
import { ref, watch } from 'vue'
import axios from 'axios'

interface Post {
  id: number
  userId: number
  title: string
  body: string
}

const posts = ref<Post[]>([])

export function usePosts() {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async () => getPosts(),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5 // 5 mins
  })

  watch(
    query.data,
    (newPosts) => {
      console.log(newPosts)
      if (newPosts) {
        posts.value = newPosts.slice(0, 5)
      }
    },
    { deep: true }
  )

  async function getPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
  }

  function deletePosts(id: number) {
    posts.value = posts.value.filter((post) => post.id !== id)
  }

  return {
    ...query,
    posts,
    deletePosts
  }
}

export default usePosts
