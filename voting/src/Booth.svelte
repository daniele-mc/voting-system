{#each options as option, index (option)}
<button class="m5" on:click={dispatch('selected', index)}>{option}
</button>
{/each}

<script>
	export let options
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
</script>