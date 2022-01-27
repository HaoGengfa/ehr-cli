<template>
  <div id="app">
    <headers></headers>
   <div class="content">
      <div class="max-cont">
        <router-view></router-view>
      </div>
   </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {useRouter} from "vue-router";
import Headers from '@/components/header'
export default defineComponent({
  name: "App",
  components:{
    Headers
  },
  setup() {
    let route = useRouter()
    function runView(url) {
      route.push(url);
    }
    return {
      runView,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  margin-top: 16px;
  min-height: calc(100vh - 74px);
  /* background: #f4f4f4; */
}
.max-cont{
  width: 1200px;
  background: white;
  margin:0 auto;
  min-height:calc(100vh - 60px);
}
</style>
