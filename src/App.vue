<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
 
import { mapState } from 'vuex';
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app,body{
    background-color: #fafafc;
  }
</style>
