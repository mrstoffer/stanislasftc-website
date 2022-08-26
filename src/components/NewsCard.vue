<template>
  <div class="card mb-3">
    <img v-if="post.better_featured_image" :src="post.better_featured_image.source_url" class="card-img-top" alt="...">
    <img v-else src="../assets/card.png" class="card-img-top" alt="...">
    <div class="card-body text-start">
      <h5 class="card-title">{{ post.title.rendered }}</h5>
      <p class="card-text" v-html="post.excerpt.rendered"></p>
      <router-link :to="{ name: 'post', params: { slug: post.slug }}" class="card-link">Lees meer</router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NewsCard',
  props: ['post'],
  setup(props) {
    console.log(props.post)
  }
}
</script>

<style>
.card {
  width: 100%;
}
</style>