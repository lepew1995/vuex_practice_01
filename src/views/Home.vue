<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ButtonTest/>
  </div>
</template>

<script>
import ButtonTest from '@/components/ButtonTest.vue'

export default {
  name: 'Home',
  components: {
    ButtonTest
  }
}
</script>
