<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import VotingCard from "../VotingCard.svelte";
</script>

<Meta
  title="Example/VotingCard"
  component={VotingCard}
  argTypes={{
    state: {
      control: { type: "radio", options: ["open", "close"] },
    },
  }}
/>

<Template let:args>
  <VotingCard {...args} />
</Template>

<Story
  name="Example1"
  args={{
    votes: [
      { option: "Sim", count: 0 },
      { option: "Nao", count: 2 },
    ],
    title: 'Segue o relator?',
    state: 'open'
  }}
/>

<Story
  name="Example2"
  args={{
    votes: [
      { option: "Sim", count: 1 },
      { option: "Nao", count: 2 },
      { option: "Talvez", count: 2 },
    ],
    title: 'Continuamos amanha?',
    state: 'open'
  }}
/>
