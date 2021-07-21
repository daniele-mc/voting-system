<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Result from "../Result.svelte";
</script>

<Meta title="Example/Result" component={Result} />

<Template let:args>
  <Result {...args} />
</Template>

<Story
  name="Example1"
  args={{
    votes: [{option: 'Sim', count: 0}, {option: 'Nao', count: 2}]
  }}
/>

<Story
  name="Example2"
  args={{
    votes: [{option: 'Sim', count: 1}, {option: 'Nao', count: 2}, {option: 'Talvez', count: 2}]
  }}
/>
