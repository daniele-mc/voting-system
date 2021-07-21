<template>
  <div>
    <h2 class="m5">Escolhas</h2>
    <p v-for="(vote, index) in votes" :key="index.toString()">
      <strong>{{ vote.option }}:</strong>
      <br>
      {{ vote.count }} votes ( {{ calcPercentual(vote.count) }} %)
    </p>
  </div>
</template>

<script>
export default {
  props: ['votes'],
  methods: {
    calcPercentual(number) {
      let total = 0;
        this.votes.map(vote => {
            total += vote.count;
        })
        const percentual = Math.round((number/total) * 100)
        return percentual;
    }
  },
}

</script>