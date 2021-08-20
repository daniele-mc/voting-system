<script>
  import { votingList, createVotingList } from "./voting.js";
  import VotingForm from "./VotingForm.svelte";
  import VotingCard from "./VotingCard.svelte";

  let mode = "view";
  let current = null;
  let votes = [];
  let title = '';

  let vtList = createVotingList();

  function addVoting() {
    mode = "form";
    vtList.create();
    current = $vtList.length - 1;
  }

  function editVoting(index) {
    current = index;
    mode = "form";
  }

  function removeVoting(index) {
    vtList.remove(index);
  }

  function updateChanges({ detail }) {
    vtList.change(detail, current);
    mode = "view";
  }

  function cancelChanges() {
    if (mode === "form") {
      removeVoting($vtList.length - 1);
    }
    mode = "view";
  }

  function chooseVoting(index) {
    votes = [];
    mode = "voting";
    title = $vtList[index].statement;
    $vtList[index].options.map((item) => {
      votes.push({ option: item, count: 0 });
    });
  }

  function home() {
    mode = "view";
  }
</script>

{#if mode === "view"}
  <h2>Votações</h2>
  <button on:click={addVoting}>Nova votação</button>
  {#each $vtList as voting, index}
    <p>
      <b>P: </b>
      {voting.statement}
      <button on:click={(e) => editVoting(index)}>Edita</button>
      <button on:click={(e) => removeVoting(index)}>Remove</button>
      <br />
      <b>R: </b>
      {#each voting.options as o, i}
        <span>
          {o}
          {#if i < voting.options.length - 1}
            <span>/ </span>
          {/if}
        </span>
      {/each}
      <button on:click={(e) => chooseVoting(index)}>Votar</button>
    </p>
  {/each}
{:else if mode === "form"}
  <VotingForm
    voting={$vtList[current]}
    on:update={updateChanges}
    on:cancel={cancelChanges}
  />
{:else if mode === "voting"}
  <h2>Votações</h2>
  <VotingCard {votes} {title} state="open" />
  <button on:click={(e) => home()}>Voltar para a tela de votações</button>
{/if}
