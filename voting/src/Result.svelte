<h2 class="m5">Escolhas</h2>
{#each votes as vote, index (vote)}
<p>
	<strong>{vote.option}:</strong>
	<br>
	{vote.count} votes ( {calcPercentual(vote.count)} %)
</p>
{/each}

<script>
  export let votes;

  function calcPercentual(number) {
        let total = 0;
        votes.map(vote => {
            total += vote.count;
        })
        const percentual = Math.round((number/total) * 100)
        return percentual;
    }
</script>