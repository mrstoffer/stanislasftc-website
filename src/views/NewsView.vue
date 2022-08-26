<template>
  <div class="page">
    <section id="title">
      <div class="container-fluid bg-primary text-light">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-6 text-center">
            <h1>Nieuws</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="news">
      <div class="container-fluid px-5">
        <div class="row justify-content-center">
          <div v-for="post in posts" :key="post.slug" class="col-10 col-md-6 col-xl-4 text-center mb-3">
            <NewsCard :post="post"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'NewsView',
  components: {
    NewsCard
  },
  setup() {
    const store = useStore()

    // const posts = ref([])

    // onMounted(() => {
    //   axios.get('http://localhost/wordpress/wp-json/wp/v2/posts').then((response) => {
    //     console.log(response.data)
    //     posts.value = response.data;
    //   })
    // })

    onMounted(() => {
      store.dispatch('fetchPosts')
    })

    const posts = computed(() => store.state.posts)

    return { posts }
  }
}
</script>

<style scoped>
.container-fluid {
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
}

#news .container-fluid {
  max-width: 1200px;
}
</style>
