<template>
  <div class="container-fluid" v-if="days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0">
    <div class="row justify-content-md-center ">
      <div class="col6 text-center">
        <h3> Next event: {{ eventName }}</h3>
        <h5> {{ eventDate }}</h5>
      </div>
    </div>
    <div class="row justify-content-md-center mt-2">
      <div class="col-3 col-xxl-1 text-center">
        <h1>{{ days }}</h1>
        days
      </div>
      <div class="col-3 col-xxl-1 text-center">
        <h1>{{ hours }}</h1>
        hours
      </div>
      <div class="col-3 col-xxl-1 text-center">
        <h1>{{ minutes }}</h1>
        minutes
      </div>
      <div class="col-3 col-xxl-1 text-center">
        <h1>{{ seconds }}</h1>
        seconds
      </div>
    </div>
  </div>
  <div class="container-fluid" v-else>
    <div class="row justify-content-md-center ">
      <div class="col6 text-center">
        <h3> Next event: No events upcoming</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance } from "vue";
import { useStore } from 'vuex';
import moment from 'moment';

export default {
  name: "Countdown",
  setup() {

    const store = useStore()

    onMounted(() => {
      setInterval(() => {
        store.commit("updateTimeToEvent")
      }, 1000)
    })

    const days = computed(() => store.state.timeToEvent.days)
    const hours = computed(() => store.state.timeToEvent.hours)
    const minutes = computed(() => store.state.timeToEvent.minutes)
    const seconds = computed(() => store.state.timeToEvent.seconds)

    const eventDate = computed(() => new Date(store.state.eventDate).toLocaleString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}))
    const eventName = computed(() => store.state.eventName)

    return { seconds, minutes, hours, days, eventName, eventDate }
  }
}
</script>

<style>

</style>