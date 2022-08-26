<template>
  <div id="banner" ref="banner" class="border-bottom border-5 border-primary">
    <div v-if="post" class="landing-text">
      <h1 v-if="post">{{ post.title.rendered }}</h1>
      <h5 class="d-none d-md-block">{{ date }}</h5>
      <router-link class="btn btn-light text-dark" to="/news"><i class="bi bi-chevron-left"></i> Terug</router-link>
    </div>
    <div v-else class="landing-text">
      <h1><span class="placeholder col-4"></span></h1>
      <h5 class="d-none d-md-block"><span class="placeholder col-4"></span></h5>
    </div>
  </div>
  <div v-if="post" class="content container-fluid">
    <div class="row justify-content-center">
      <div class="col-8" v-html="post.content.rendered"></div>
    </div>
  </div>
  <div v-else class="content container-fluid px-0 px-md-2 px-lg-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'PostView',
  props: ['slug'],
  setup(props) {
    const store = useStore()
    const banner = ref(null)

    const id = ref(props.slug)
    const post = ref(null)
    const date = ref(null)
    const cache = computed(() => store.state.postCache)

    onMounted(() => {
      store.dispatch('fetchPosts')
      console.log(id.value)
      post.value = store.getters.getPostBySlug(id.value)
      if (!post.value && cache.value) {
        console.log('gonna cache')
        console.log(cache.value)
        post.value = cache.value
        console.log(post.value)
      }
      if (post.value) {
        store.commit('cachePost', post.value)
        let dateObject = new Date(post.value.date)
        date.value = dateObject.toLocaleString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric"})
        if (post.value.better_featured_image) {
          console.log(post.value.better_featured_image.source_url)
          banner.value.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${post.value.better_featured_image.source_url}) no-repeat center center fixed`
          banner.value.style.backgroundSize = `cover`
        } else {
          console.log('no')
          banner.value.style.background = "var(--bs-primary)"
        }
      }
    })

    return { id, post, date, banner }
  }
}
</script>

<style scoped>
#banner {
  padding-top: 60px;
  display: table;
  position: relative;
  width: 100%;
  height: 50%;
}

@media (min-width: 768px) { 
  #banner {
    background: var(--bs-primary);
    padding: 0;
    height: 50%;
  }
}

.landing-text {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: white;
}

.container-fluid {
  padding-top: 60px;
  padding-bottom: 60px;
}

.btn-outline-light:hover {
  background-color: var(--bs-light) !important;
}

.btn-light:hover {
  background: none;
  color: var(--bs-light) !important;
}
</style>
