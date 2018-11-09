<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <div>

    <h1>List of ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas"> {{ ninja }} </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ninjas: ['Yoshi','Mario','Ryu']
      }
    },
  }
</script>

<style scoped>

  h1 {
    color: green;
  }
</style>
