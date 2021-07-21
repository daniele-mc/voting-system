<template>
  <div id="app">
    <voting-card :title="title" :votes="votes" :state="state" />
  </div>
</template>

<script>
import VotingCard from "./components/VotingCard.vue";

const votes = [
  { option: "Sim", count: 6 },
  { option: "Nao", count: 3 },
];

const title = "Segue o relator?";

let state = "open";

export default {
  name: "App",
  components: {
    VotingCard,
  },
  computed: {
    votes() {
      return votes;
    },
    title() {
      return title;
    },
    state() {
      return state;
    },
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
