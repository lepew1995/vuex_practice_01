<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <ButtonTest/>
</template>
<script>
// @ is an alias to /src
import ButtonTest from '@/components/ButtonTest.vue'

export default {
  components: {
    ButtonTest
  }
}
</script>