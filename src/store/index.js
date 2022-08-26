import { createStore } from 'vuex'
import axios from 'axios'
import { API } from "@the-orange-alliance/api";
const toa = new API("fcd44e40902f2bba2583520f347fbea212d50a4199b32f8320040837b78e25db", "STT_STA");

export default createStore({
  state: {
    displaySection: "main",
    currentSeason: "2122",
    matches: {},
    events: [],
    posts: [],
    postCache: {}
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
    }
  },
  actions: {
    fetchPosts(context) {
      axios.get("http://localhost/wordpress/wp-json/wp/v2/posts")
        .then(res => {
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
      toa.getTeamEvents("18710", "2122").then(data => {
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
            context.commit("setMatches", matches)
          })
        })
      });
    },
  },
  modules: {
  }
})
