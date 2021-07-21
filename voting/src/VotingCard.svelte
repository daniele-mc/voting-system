<script>
  import Booth from "./Booth.svelte";
  import Result from "./Result.svelte";

  export let state;
  export let title;
  export let votes;
  let options = votes.map((item) => item.option);

  function endVotation() {
    state = "close";
  }

  function select(event) {
    votes[event.detail].count++;
  }
</script>

{#if state === "open"}
  <div class="panel question">
    <p class="m5">{title}</p>
    <Booth {options} on:selected={select} />
  </div>
  <button class="submitBtn" on:click={endVotation}>Encerrar votacao</button>
{:else}
  <div class="panel results">
    <Result {votes} />
  </div>
{/if}

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
  :global(.m5) {
    margin: 5px;
  }
  .submitBtn {
    margin: 15px;
  }
</style>
