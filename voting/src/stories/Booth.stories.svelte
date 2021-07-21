<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Booth from "../Booth.svelte";
</script>

<Meta title="Example/Booth" component={Booth} />

<Template let:args>
  <Booth {...args} />
</Template>

<Story
  name="Example1"
  args={{
    options: ["Sim", "Nao"],
  }}
/>

<Story
  name="Example2"
  args={{
    options: ["Sim", "Nao"],
  }}
/>
