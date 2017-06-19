<template>
  <div id="app">
    <el-row>
      <el-col :md="3">
        <el-menu>
          <el-menu-item 
            v-for="route in $router.options.routes"
            v-if="!route.hidden"
            :index="route.path"
            @click="onRouteChange(route.path)">
            {{route.name}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- <img src="./assets/logo.png"> -->
      <el-col :md="19" :push="1">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    onRouteChange(path){
      this.$router.push(path)
    }
  },
  mounted(){
    // console.log(this.$router.options.routes)
  }
}
</script>

<style>
#app {
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
