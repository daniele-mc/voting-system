<template>
  <div id="app">
    <h2>Vue</h2>
    <VotingList />
  </div>
</template>

<script>
import VotingList from "./components/VotingList.vue";

export default {
  name: "App",
  components: {
    VotingList,
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
</style>