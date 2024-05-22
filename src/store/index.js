import { createStore } from 'vuex'
import axios from 'axios'
import moment from 'moment';
import { API } from "@the-orange-alliance/api";
const toa = new API("fcd44e40902f2bba2583520f347fbea212d50a4199b32f8320040837b78e25db", "STT_STA");

export default createStore({
  state: {
    displaySection: "main",
    currentSeason: "2122",
    matches: {},
    events: [],
    eventsOk: true,
    eventsEmpty: false,
    matchesOk: true,
    posts: [],
    postCache: {},
    eventDate: "",
    eventName: "",
    timeToEvent: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    },
  },
  getters: {
    latestPosts: (state) => () => {
      return [
        state.posts[0],
        state.posts[1],
        state.posts[2]
      ]
    },
    getPostBySlug: (state) => (slug) => {
      let match = state.posts.filter(post => post.slug === slug)
      console.log(match)
      return match[0]
    }
  },
  mutations: {
    setSection(state, payload) {
      state.displaySection = payload
    },
    setPosts (state, payload) {
      state.posts = payload
    },
    cachePost (state, payload) {
      state.postCache = payload
    },
    setEvents(state, payload) {
      state.events = payload
    },
    setMatches(state, payload) {
      state.matches = payload
    },
    setEventDate(state, payload) {
      state.eventDate = payload
    },
    updateTimeToEvent(state) {
      let date = new Date(state.eventDate)
      let now = new Date()
      let difference = moment.duration(date - now)

      state.timeToEvent = {
        days: Math.floor(difference.asDays()),
        hours: difference.hours(),
        minutes: difference.minutes(),
        seconds: difference.seconds()
      }

    },
    setEventName(state, payload) {
      state.eventName = payload
    },
    setEventsOk(state, payload) {
      state.eventsOk = payload
    },
    setMatchesOk(state, payload) {
      state.matchesOk = payload
    },
    setEventsEmpty(state, payload) {
      state.eventsEmpty = payload
    },
    updateSeason(state) {
      let now = new Date()
      let month = now.getMonth()
      let season
      console.log(month)
      if (month >= 8) {
        season = now.getFullYear().toString()[2] + now.getFullYear().toString()[3] + (now.getFullYear() + 1).toString()[2] + (now.getFullYear() + 1).toString()[3]
      } else {
        season = (now.getFullYear() - 1).toString()[2] + (now.getFullYear() - 1).toString()[3] + now.getFullYear().toString()[2] + now.getFullYear().toString()[3]
      }
      console.log(season)
      state.currentSeason = season
    },
    setSeason(state, payload) {
      state.currentSeason = payload
    },
    decrementSeason(state) {
      let firstYear = parseInt(state.currentSeason.slice(0,2))
      let secondYear = parseInt(state.currentSeason.slice(2,4))
      firstYear--
      secondYear--
      let season = firstYear.toString() + secondYear.toString()
      state.currentSeason = season
    },
    incrementSeason(state) {
      let firstYear = parseInt(state.currentSeason.slice(0,2))
      let secondYear = parseInt(state.currentSeason.slice(2,4))
      firstYear++
      secondYear++
      let season = firstYear.toString() + secondYear.toString()
      state.currentSeason = season
    }
  },
  actions: {
    fetchPosts(context) {
      axios.get("https://stanislasftc.nl/wordpress/index.php/wp-json/wp/v2/posts")
        .then(res => {
          console.log("the posts")
          console.log(res)
          if (res) {
            context.commit("setPosts", res.data)
          } else {
            throw new Error("could not fetch posts")
          }
        })
    },
    async fetchMatches(context) {
      // let toaOptions = {
      //   headers: {
      //     'X-TOA-KEY': 'fcd44e40902f2bba2583520f347fbea212d50a4199b32f8320040837b78e25db',
      //     'X-Application-Origin': 'STT_STA'
      //   }
      // }
      
      // // i hate this fucking api so much
      // axios.get(`https://theorangealliance.org/api/team/18710/events/${context.state.currentSeason}`, toaOptions)
      //   .then(res => {
      //     if (res) {
      //       let eventList = []
      //       let dataList = res.data
      //       console.log('events')
      //       console.log(dataList)
      //       let promises = dataList.map(event => {
      //         console.log(event.event_key)
      //         return axios.get(`https://theorangealliance.org/api/event/${event.event_key}`, toaOptions)
      //       })
      //       console.log(promises)
      //       Promise.all(promises).then(res => {
      //         if (res) {
      //           console.log("this is data")
      //           console.log(res)
      //           // dataList.forEach(el => {
      //           //   let time = new Date(res.filter(event => event.data[0].event_key == el.event_key)[0].data[0].start_date).valueOf()
      //           //   console.log(el.event_key)
      //           //   console.log(time)
      //           // })
      //           dataList.sort((eventA, eventB) => {
      //             let timeA = new Date(res.filter(event => event.data[0].event_key == eventA.event_key)[0].data[0].start_date).valueOf()
      //             let timeB = new Date(res.filter(event => event.data[0].event_key == eventB.event_key)[0].data[0].start_date).valueOf()
      //             return timeA - timeB
      //           })
      //           dataList = dataList.reverse()
      //           console.log(dataList)
      //           dataList.forEach(el => {
      //             eventList.push(res.filter(event => event.data[0].event_key == el.event_key)[0].data[0])
      //           })
      //           console.log(eventList)
      //           context.commit("setEvents", eventList)
      //         }
      //       })
      //     }
      //   })
      context.commit('setEvents', [])
      context.commit('setMatches', {})
      context.commit('setEventsOk', true)
      context.commit("setEventsEmpty", false)
      console.log("season:", context.state.currentSeason)
      toa.getTeamEvents("18710", context.state.currentSeason).then(data => {
        console.log(data);
        let events = []
        let eventPromises = data.map(event => {
          console.log(event.eventKey)
          return toa.getEvent(event.eventKey)
        })
        Promise.all(eventPromises).then(data => {
          events = data
          events.sort((eventA, eventB) => {
            let timeA = new Date(eventA.startDate).valueOf()
            let timeB = new Date(eventB.startDate).valueOf()
            return timeA - timeB
          })
          events = events.reverse()
          console.log(events)
          context.commit("setEvents", events)
          if (!events.length > 0) context.commit("setEventsEmpty", true)
          // let matches = []
          let matches = {}
          events.forEach(event => {
            matches[event.eventKey] = []
          })
          console.log(matches)
          let matchPromises = events.map(event => {
            console.log(event.eventKey)
            return toa.getEventMatches(event.eventKey)
          })
          Promise.all(matchPromises).then(data => {
            console.log(data)
            data.forEach(event => {
              let eventMatches = []
              event.forEach(match => {
                for (let team of match._matchParticipants) {
                  if (team.teamKey === "18710") {
                    matches[match.eventKey].push(match)
                  }
                }
              })
            });
            console.log(matches)
            context.commit('setEventsOk', true)
            context.commit("setMatches", matches)
          })
        })
      })
      .catch(err => {
        console.log(err)
        context.commit('setEventsOk', false)
        context.commit('setMatchesOk', false)
      });
    },
    async fetchEventDate(context) {
      axios.get("https://api.npoint.io/68c8172632c8d5c51ea9")
        .then(res => {
          console.log('this happened')
          console.log(res)
          if (res) {
            context.commit("setEventDate", res.data.event_date)
            context.commit("setEventName", res.data.event_name)
            context.commit("updateTimeToEvent")
            console.log(context.state.eventDate)
          } else {
            throw new Error("could not fetch date")
          }
        })
    }
  },
  modules: {
  }
})
