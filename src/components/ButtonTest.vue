<template>
  <div>
    <hr>

    <h2>Button tst here!</h2>
    <div class="test">
      <button @click="addCount(1)">+</button>
      <p>{{counter}}</p>
      <button @click="addCount(-1)">-</button>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ButtonTest',
  computed:{
    counter(){
      return this.$store.state.counter;
    }
  },
  methods: {
  addCount(num){
    this.$store.dispatch("addCounter", num);
    //Point out to addCounter action 
  },
}
}
</script>
<style scoped>
.test{
  display:flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.test p{
  margin:1rem;
  font-size: 24px;
  font-weight:bold;
}
button{
  padding: 0rem 0.7rem; 
  font-size: 24px;
  font-weight:bold;
}
</style>

