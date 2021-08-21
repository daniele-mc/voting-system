<template>
  <div v-if="mode === 'view'">
    <h2>Votações</h2>
    <button @click="addVoting">Nova votação</button>
    <p v-for="(voting, i) in votings" :key="i">
      <b>P: </b> {{ voting.statement }}
      <button className="m5" @click="editVoting(i)">Edita</button>
      <button className="m5" @click="removeVoting(i)">Remove</button>
      <br />
      <b>R: </b>
      <span v-for="(o, i) in voting.options" :key="i">
        {{ o }}
        <span v-if="i < voting.options.length - 1">/ </span>
      </span>
      <button className="m5" @click="chooseVoting(i)">Votar</button>
    </p>
  </div>
  <div v-else-if="mode === 'form'">
    <VotingForm
      :vote="votings[current]"
      @update="updateChanges"
      @cancel="cancelChanges"
    />
  </div>
  <div v-else>
    <voting-card
      :title="title"
      :options="votingOptions"
      @update="updateState"
    />
    <button className="m5" @click="home()">Voltar para tela de votações</button>
  </div>
</template>

<script>
import VotingForm from "./VotingForm";
import VotingCard from "./VotingCard.vue";
import { ref } from "vue";

import {
  votings,
  size,
  createVoting,
  updateVoting,
  deleteVoting,
} from "./voting";

// let state = 'open';

export default {
  components: { VotingForm, VotingCard },
//   data() {
//     return {
//       state: "open",
//     };
//   },
  setup() {
    const mode = ref("view");
    const current = ref(0);
    const title = ref("");
    const votingOptions = ref([]);
    // const stateView = ref("open");

    const addVoting = () => {
      createVoting();
      mode.value = "form";
      current.value = size.value - 1;
    };

    const updateChanges = (vote) => {
      updateVoting(vote, current.value);
      mode.value = "view";
    };

    const editVoting = (index) => {
      current.value = index;
      mode.value = "form";
    };

    const removeVoting = (index) => {
      deleteVoting(index);
    };

    const cancelChanges = () => {
      if (mode.value === "form") {
        deleteVoting(size.value - 1);
      }
      mode.value = "view";
    };

    const chooseVoting = (index) => {
      votingOptions.value = [];
      mode.value = "voting";
      title.value = votings[index].statement;
      votings[index].options.map((item) => {
        votingOptions.value.push({ option: item, count: 0 });
      });
    };

    const home = () => {
      mode.value = "view";
    };

    const updateState = () => {
      console.log("a");
    };

    return {
      mode,
      votings,
      current,
      addVoting,
      updateChanges,
      editVoting,
      removeVoting,
      cancelChanges,
      title,
      votingOptions,
      chooseVoting,
      home,
    //   stateView,
      updateState,
    };
  },
};
</script>
