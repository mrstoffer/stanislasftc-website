<template>
  <div id="banner" class="border-5 border-bottom border-primary">
    <div class="landing-text">
      <h1 class="pb-5">FTC Stanislascollege</h1>
      <!-- <h3 class="d-none d-md-block">Stanislas Tech Team en Stanislas Tech Academy</h3> -->
      <button @click="moveDown" class="btn btn-outline-primary arrowbtn mt-5"><i class="bi bi-chevron-down"></i></button>
    </div>
  </div>

  <section id="welcome">
    <div class="container-fluid bg-primary text-light">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-6 text-center">
          <h1>Wie zijn wij?</h1>
          <hr class="my-4"/>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-9 text-center">
          <p class="lead">Wij zijn de robotica teams van het Stanislascollege Westplantsoen in Delft, die meedoen aan de First Tech Challenge. Onze teams bestaan uit 14-18 jarige leerlingen uit de bovenbouw van HAVO en VWO.</p>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-9 text-center mt-4">
          <router-link to="/about" class="btn btn-outline-light text-light">Lees meer over ons</router-link>
        </div>
      </div>
      <!-- <Waypoint @change="initCounters">
        
      </Waypoint> -->
    </div>
  </section>

  <section id="teams">
    <!-- <div class="container-fluid bg-primary text-light px-0">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-6 text-center">
          <h1>Onze teams</h1>
        </div>
      </div>
    </div> -->
    <!-- <div class="container-fluid bg-primary d-block d-lg-none" style="padding: 0">
      <div class="d-block d-lg-none">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed bg-primary accstt text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <h2>Stanislas Tech Team</h2>
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body bg-stt text-dark"><strong>Stanislas Tech Team (STT)</strong> is een van de oudste FTC-teams van Nederland, het behoort namelijk tot de eerste 5. Dit team bestaat voornamelijk uit leerlingen uit de vijfde klas en een enkele 6 VWO'er met grote passie voor FTC. De leden van dit team hebben al een jaartje ervaring van hun tijd in STA en weten dus al goed hoe alles zit</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed bg-primary accsta text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <h2>Stanislas Tech Academy</h2>
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body bg-sta text-light"><strong>Stanislas Tech Academy (STA)</strong> is later opgericht en bestaat uit vierdeklassers. Dit is ons 'rookie-team', zij doen voor het eerst mee. Maar met goede begeleiding van STT en eigen inzet weten ze toch heel goed te presteren. Na het eerste jaar FTC te hebben gedaan stromen de leden van STA door naar STT</div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="container-fluid d-none d-lg-block" style="padding-top: 0; padding-bottom:0">
      <div class="row justify-content-md-center">
        <div class="col-12 col-lg-6 px-0 py-5 bg-stt">
          <div class="px-5 d-none d-xxl-block">
            <h2 class="border-start border-5 border-fullblack my-0 px-5">Stanislas Tech Team</h2>
            <h4 class="border-start border-5 border-fullblack px-5">#18710</h4>
          </div>
          <div class="px-5 d-none d-lg-block d-xxl-none">
            <h2 class="border-start border-5 border-fullblack my-0 px-5">Stanislas Tech Team</h2>
          </div>
          <div class="px-5 d-block d-lg-none text-center">
            <h2 class="my-0 px-5">Stanislas Tech Team</h2>
          </div>
          <div class="text-center px-5 pt-4">
            <p><strong>Stanislas Tech Team (STT)</strong> is een van de oudste FTC-teams van Nederland, het behoort namelijk tot de eerste 5. Dit team bestaat voornamelijk uit leerlingen uit de vijfde klas en een enkele 6 VWO'er met grote passie voor FTC. De leden van dit team hebben al een jaartje ervaring van hun tijd in STA en weten dus al goed hoe alles zit</p>
            <a class="btn btn-outline-dark" href="#">Lees meer</a>
          </div>
        </div>
        <div class="col-12 col-lg-6 text-end px-0 py-5 bg-sta text-light">
          <div class="px-5 d-none d-xxl-block">
            <h2 class="border-end border-5 border-white my-0 px-5">Stanislas Tech Academy</h2>
            <h4 class="border-end border-5 border-white px-5">#18859</h4> 
          </div>
          <div class="px-3 d-none d-lg-block d-xxl-none">
            <h2 class="border-end border-5 border-white my-0 px-5">Stanislas Tech Academy</h2>
          </div>
          <div class="px-3 d-block d-lg-none text-center">
            <h2 class="my-0 px-5">Stanislas Tech Academy</h2>
          </div>
          <div class="text-center px-5 pt-4">
            <p><strong>Stanislas Tech Academy (STA)</strong> is later opgericht en bestaat uit vierdeklassers. Dit is ons 'rookie-team', zij doen voor het eerst mee. Maar met goede begeleiding van STT en eigen inzet weten ze toch heel goed te presteren. Na het eerste jaar FTC te hebben gedaan stromen de leden van STA door naar STT</p>
            <a class="btn btn-outline-light" href="#">Lees meer</a>
          </div>
        </div>
      </div>
    </div> -->
    

    <!-- <div class="container-fluid d-block d-lg-none" style="padding-top: 0; padding-bottom:0">
      <div class="row justify-content-md-center">
        <div class="col-12 text-center px-0 py-5 bg-stt">
          <h2 class="my-0 px-5">Stanislas Tech Team</h2>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-12 text-center text-light px-0 py-5 bg-sta">
          <h2 class="my-0 px-5">Stanislas Tech Academy</h2>
        </div>
      </div>
    </div> -->

    <div class="container-fluid d-none d-lg-block" style="padding-top: 0; padding-bottom:0">
      <div class="row justify-content-md-center">
        <div class="col-12 col-lg-6 text-center px-0 py-5 bg-stt">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-xxl-8 text-center">
              <h3 class="border-start border-5 border-fullblack my-0 px-3"><strong>Stanislas Tech Team</strong></h3>
              <h4 class="border-start border-5 border-fullblack px-3">#18859</h4>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 text-center px-0 py-5 bg-sta text-light">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-xxl-8 text-center">
              <h3 class="border-end border-5 border-white my-0 px-3"><strong>Stanislas Tech Academy</strong></h3>
              <h4 class="border-end border-5 border-white px-3">#18710</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container-fluid" style="padding-bottom: 0;">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 text-center">
          <router-link to="/about" class="btn btn-primary text-light">Lees meer</router-link>
        </div>
      </div>
    </div> -->
  </section>

  <!-- <section id="ftc">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-6 text-center">
          <h1>Wat is FTC?</h1>
          <hr class="my-4"/>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-9 text-center">
          <p class="lead">FTC staat voor First Tech Challenge, en wordt georganiseerd door de organisatie FIRST. Het doel van deze competitie is om jongeren enthousiast te maken voor techniek. Dit doen ze met een roboticawedstrijd waarin teams een robot moeten bouwen die bepaalde opdrachten kan uitvoeren. Maar FTC gaat niet alleen om de robot zelf, belangrijk is ook het verspreiden van de gedachte van FIRST door middel van outreach</p>
          <br>
          <a href="https://www.firstinspires.org/robotics/ftc" class="btn btn-primary text-light">Lees meer over FTC</a>
        </div>
      </div>
    </div>
  </section> -->

  <section id="countdown">
    <div class="container-fluid border-bottom border-primary border-5">
      <div class="row justify-content-md-center my-4">
        <Countdown/>
      </div>
    </div>
  </section>

  <section id="news">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-6 text-center">
          <h1>Laatste nieuws</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="padding-top: 0; padding-bottom:0">
      <div class="row justify-content-center">
        <div v-for="post in posts.slice(0, 3)" :key="post.slug" class="col-8 col-md-6 col-xxl-2 text-center mb-3">
          <NewsCard :post="post"/>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="padding-top: 0;">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 text-center">
          <router-link id="to-news" to="/news" class="btn btn-primary text-light">Meer nieuws</router-link>
        </div>
      </div>
    </div>
  </section>

  <section id="robotimg">
  </section>

</template>

<script>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'
// @ is an alias to /src
import axios from 'axios'
import NewsCard from '@/components/NewsCard.vue'
import { Waypoint } from 'vue-waypoint'
import Countdown from '@/components/Countdown.vue'


export default {
  name: 'HomeView',
  components: {
    NewsCard,
    Waypoint,
    Countdown
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
      store.dispatch('fetchEventDate')
    })

    const posts = computed(() => store.state.posts)
    const eventDate = computed(() => new Date(store.state.eventDate))
    console.log(store.state.eventDate)

    const counter1 = ref()
    const counter2 = ref()
    const counter3 = ref()
    const counter4 = ref()

    const counting = ref(false)

    const moveDown = () => {
      let y = document.getElementById("teams").getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: y, behavior: 'smooth'})
    }

    // const initCounters = (waypointState) => {
    //   console.log(waypointState.going);
    //   console.log(counting.value);
    //   if (waypointState.going == "IN") {
    //     if (!counting.value) {
    //       counting.value = true
    //       counter1.value.start()
    //       counter2.value.start()
    //       counter3.value.start()
    //       counter4.value.start()
    //     }
    //   }
    // }

    return { posts, moveDown, /* counter1, counter2, counter3, counter4, initCounters,*/ eventDate }
  }
}
</script>

<style scoped>
#banner {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/banner.jpeg) no-repeat center center fixed;
  display: table;
  position: relative;
  width: 100%;
  height: 100% !important;
  background-size: cover;
}

@media (min-width: 992px) {
  #banner {
    height: 60% !important;
  }
}

.landing-text {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: white;
}

.container-fluid {
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
}

.arrowbtn:hover {
  color: var(--bs-light) !important;
}

#robotimg {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/robots.jpeg) no-repeat center center fixed;
  display: table;
  height: 40%;
  position: relative;
  width: 100%;
  background-size: cover;
}

.accstt:not(.collapsed) {
  color: var(--bs-dark) !important;
  background-color: var(--bs-stt) !important;
}

.accsta:not(.collapsed) {
  background-color: var(--bs-sta) !important;
}
</style>