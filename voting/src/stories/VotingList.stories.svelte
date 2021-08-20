<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import VotingList from "../VotingList.svelte";
</script>

<Meta title="Example/VotingList" component={VotingList} />

<Template let:args>
  <VotingList {...args} />
</Template>

<Story name="Example1" args={{}} />

<Story name="Example2" args={{}} />
