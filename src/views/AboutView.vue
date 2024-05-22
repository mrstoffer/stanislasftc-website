<template>
  <div class="page">
    <section id="title">
      <div class="container-fluid bg-primary text-light">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-6 text-center">
            <h1>About</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <!-- <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-8 col-lg-4 text-center">
            <h3>Scores season {{ "20" + season.slice(0,2) + "-20" + season.slice(2,4) }}</h3>
            <p class="lead d-none d-lg-block">Match data from <a href="https://theorangealliance.org">The Orange Alliance</a></p>
            <p class="lead d-block d-lg-none">Match data is currently not supported on mobile devices</p>
          </div>
        </div>
        <div class="row justify-content-center d-none d-lg-flex">
          <div class="col-8 col-xl-6  mt-2" v-if="events.length > 0">
            <div class="accordion" id="events">
              <div class="accordion-item" v-for="event in events" :key="event.eventKey">
                <h2 class="accordion-header" :id="'header-' + event.eventKey">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-' + event.eventKey" :aria-controls="'collapse-' + event.eventKey">
                    {{ event.eventName }} <span v-if="event.divisionName"> &nbsp- {{ event.divisionName}} Division</span> &nbsp <small class="text-muted">{{ new Date(event.startDate).toLocaleString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric'}) }}</small> <small class="text-muted" v-if="new Date(event.startDate).toLocaleString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric'}) !== new Date(event.endDate).toLocaleString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric'})">-{{ new Date(event.endDate).toLocaleString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric'}) }}</small>
                  </button>
                </h2>
                <div :id="'collapse-' + event.eventKey" class="accordion-collapse collapse" :aria-labelledby="'#header-' + event.eventKey" data-bs-parent="#events">
                  <div class="accordion-body">
                    <ScoreTable :matches="matches[event.eventKey]"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="eventsEmpty" class="col-12 d-flex justify-content-center mt-2">
            <span class="notify">No matches for this season (yet)</span> <button class="btn btn-primary text-light" @click="fetchMatches">Try again</button>
          </div>
          <div v-else-if="!dataOk" class="col-12 d-flex justify-content-center mt-2">
            <span class="notify">Could not load matches</span> <button class="btn btn-primary text-light" @click="fetchMatches">Try again</button>
          </div>
          <div v-else class="col-12 d-flex justify-content-center mt-2">
            <div class="spinner-border text-primary text-center" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div> -->
    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import ScoreTable from '@/components/ScoreTable.vue'

export default {
  components: {
    ScoreTable
  },
  setup() {
    const store = useStore()

    const fetchMatches = () => {
      store.dispatch("fetchMatches")
    }

    onMounted(() => {
      store.commit('updateSeason')
      // store.commit('setSeason', '2223')
      fetchMatches()
    })

    const incrementSeason = () => {
      store.commit('incrementSeason')
      store.dispatch("fetchMatches")
    }

    const decrementSeason = () => {
      store.commit('decrementSeason')
      store.dispatch("fetchMatches")
    }

    const events = computed(() => store.state.events)
    const matches = computed(() => store.state.matches)
    const season = computed(() => store.state.currentSeason)
    const dataOk = computed(() => store.state.eventsOk)
    const eventsEmpty = computed(() => store.state.eventsEmpty)

    return { events, matches, season, dataOk, fetchMatches, eventsEmpty, incrementSeason, decrementSeason }
  },
}
</script>

<style scoped>
.container-fluid {
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
}
.notify {
  padding: .50em;
}
</style>