<template>
  <div>
    <div v-if="state === 'open'">
      <div class="panel question">
        <p class="m5">{{ title }}</p>
        <Booth :options="optionsVoting" @select="select" />
      </div>
      <button v-on:click="endVotation" class="submitBtn">
        Encerrar votacao
      </button>
    </div>
    <div v-else>
      <div class="panel results">
        <Result :votes="optionsMutable" />
      </div>
    </div>
  </div>
</template>

<script>
import Booth from "./Booth";
import Result from "./Result";


export default {
  components: { Booth, Result },
  props: ["title", "options"],
 data() {
    return {
      state: 'open',
      optionsVoting: this.options.map((vote) => vote.option),
      optionsMutable: this.options
    }
  },
  methods: {
    endVotation() {
      this.state = "close";
    },

    select(index) {
      this.optionsMutable[index].count++;
    },
  }
};
</script>


<style>
.panel {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.question {
  background-color: azure;
}
.results {
  background-color: beige;
}
.m5 {
  margin: 5px;
}
.submitBtn {
  margin: 15px;
}
</style>