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
    position: absolute;
    top: 0;
    width: 100%;
    bottom: 0;
    background-color: #fafafc;
  }
</style>
