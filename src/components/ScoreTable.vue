<template>
  <div v-if="matches">
    <p class="lead" v-if="!matches.length > 0">No matches could be found</p>
    <table v-if="playoffs.length > 0" class="table table-striped table-light">
      <thead>
        <tr class="text-center">
          <th scope="col">Match</th>
          <th scope="col" class="border-2 border-top-0 border-bottom-0 border-start-0 border-dark">Result</th>
          <th scope="col" colspan="3">Red Alliance</th>
          <th scope="col" colspan="3" >Blue Alliance</th>
          <th scope="col" colspan="2" class="border-2 border-top-0 border-bottom-0 border-end-0 border-dark">Score</th>
        </tr>
      </thead> 
      <tbody class="text-center">
        <tr v-for="match in playoffs" :key="match.matchKey">
          <td scope="col">{{ match.matchName }}</td>
          <td scope="col" class="border-2 border-top-0 border-bottom-0 border-start-0 border-dark">{{ wlt(match.redScore, match.blueScore, match.participants.filter(team => team.teamKey === "18710")[0].station) }}</td>
          <td v-for="participant in match.participants.filter(team => team.station < 20)" :key="participant.teamKey" scope="col" class="table-danger" :class="{'fw-bold': participant.teamKey == '18710'}">{{ participant.teamKey }}</td>
          <td v-for="participant in match.participants.filter(team => team.station > 20)" :key="participant.teamKey" scope="col" class="table-info" :class="{'fw-bold': participant.teamKey == '18710'}">{{ participant.teamKey }}</td>
          <td scope="col" class="table-danger border-2 border-top-0 border-bottom-0 border-end-0 border-dark" :class="{'fw-bold': match.participants.filter(team => team.teamKey === '18710')[0].station < 20, 'text-decoration-underline': match.redScore > match.blueScore}">{{ match.redScore }}</td>
          <td scope="col" class="table-info" :class="{'fw-bold': match.participants.filter(team => team.teamKey === '18710')[0].station > 20, 'text-decoration-underline': match.blueScore > match.redScore}">{{ match.blueScore }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="quals.length > 0" class="table table-striped table-light">
      <thead>
        <tr class="text-center">
          <th scope="col">Match</th>
          <th scope="col" class="border-2 border-top-0 border-bottom-0 border-start-0 border-dark">Result</th>
          <th scope="col" colspan="2">Red Alliance</th>
          <th scope="col" colspan="2">Blue Alliance</th>
          <th scope="col" colspan="2" class="border-2 border-top-0 border-bottom-0 border-end-0 border-dark">Score</th>
        </tr>
      </thead> 
      <tbody class="text-center">
        <tr v-for="match in quals" :key="match.matchKey">
          <td scope="col">{{ match.matchName }}</td>
          <td scope="col" class="border-2 border-top-0 border-bottom-0 border-start-0 border-dark">{{ wlt(match.redScore, match.blueScore, match.participants.filter(team => team.teamKey === "18710")[0].station) }}</td>
          <td v-for="participant in match.participants.filter(team => team.station < 20)" :key="participant.teamKey" scope="col" class="table-danger" :class="{'fw-bold': participant.teamKey == '18710'}">{{ participant.teamKey }}</td>
          <td v-for="participant in match.participants.filter(team => team.station > 20)" :key="participant.teamKey" scope="col" class="table-info" :class="{'fw-bold': participant.teamKey == '18710'}">{{ participant.teamKey }}</td>
          <td scope="col" class="table-danger border-2 border-top-0 border-bottom-0 border-end-0 border-dark" :class="{'fw-bold': match.participants.filter(team => team.teamKey === '18710')[0].station < 20, 'text-decoration-underline': match.redScore > match.blueScore}">{{ match.redScore }}</td>
          <td scope="col" class="table-info" :class="{'fw-bold': match.participants.filter(team => team.teamKey === '18710')[0].station > 20, 'text-decoration-underline': match.blueScore > match.redScore}">{{ match.blueScore }}</td>
        </tr>
      </tbody>
    </table>
    <table v-if="online.length > 0" class="table table-striped table-light">
      <thead>
        <tr class="text-center">
          <th scope="col" class="border-2 border-top-0 border-bottom-0 border-start-0 border-dark">Match</th>
          <th scope="col" class="border-2 border-top-0 border-bottom-0 border-end-0 border-dark" colspan="2">Score</th>
        </tr>
      </thead> 
      <tbody class="text-center">
        <tr v-for="match in online" :key="match.matchKey">
          <td scope="col" class="border-2 border-top-0 border-bottom-0 border-start-0 border-dark">{{ match.matchName }}</td>
          <td scope="col" class="border-2 border-top-0 border-bottom-0 border-end-0 border-dark">{{ match.redScore }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="d-flex justify-content-center">
    <div class="spinner-border text-primary text-center" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue'

export default {
  name: 'ScoreTable',
  props: ['matches'],
  setup(props) {
    console.log(props.matches)
    const online = computed(() => props.matches.filter(match => match.participants.length == 1))
    const quals = computed(() => props.matches.filter(match => match.tournamentLevel == 1 && match.participants.length > 1))
    const playoffs = computed(() => props.matches.filter(match => match.tournamentLevel == 31 || match.tournamentLevel == 32 || match.tournamentLevel == 4))
    const wlt = (red, blue, station) => {
      if (station < 20) {
        if (red > blue) return 'W'
        if (red < blue) return 'L'
        else return 'T'
      } else {
        if (red < blue) return 'W'
        if (red > blue) return 'L'
        else return 'T'
      }
    }
    return {quals, playoffs, online, wlt}
  }
}
</script>

<style>

</style>