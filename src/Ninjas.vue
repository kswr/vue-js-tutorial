<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <ul>
    <li v-for="ninja in ninjas"> {{ ninja }} </li>
  </ul>
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

<style>

</style>
