<script>
import VotingCard from "./VotingCard.svelte";

let votes = [
    { option: "Sim", count: 0 },
    { option: "Nao", count: 0 },
    { option: "Talvez", count: 0 },
  ];
</script>

<VotingCard {votes} title="Segue o relator?" state="open"/>