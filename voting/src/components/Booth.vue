<template>
  <div>
    <button
      v-for="(option, index) in options"
      class="m5"
      :key="option"
      @click="$emit('select', index)"
    >
      {{ option }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Booth",
  props: ["options"],
};
</script>

<style>
.selected {
  font-weight: bold;
}
</style>