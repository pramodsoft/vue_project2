<template>
  <div id="app">
    <top_bar>Link Use Router-Link component working same as href </top_bar> 
    
    <div id="router_view">
      <h1 class="center">ROUTER VIEW PAGE USING ROUTER-VIEW COMPONENTS</h1>
      <router-view></router-view> 
      </div>
    <class_change_test>SHOW CHANGE IN CLASS EFFECT ON CLICK EVENT</class_change_test>
    <fatch_data></fatch_data>
  </div>
</template>

<script>
import top_bar from "./components1/top_bar.vue";
import class_change from "./components1/change_class.vue";
import fatch_data from "./components/fatch_data.vue";

export default {
  
  name: 'app',
  data(){
    return{
      
    }
  },
  methods:{
    
  },
  components: {
   class_change_test:class_change,
   top_bar,
   fatch_data,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
}

#main{
  border:1px solid black;
  text-align: center;
  padding:10px;
  box-shadow: 1px 2px 1px #000000;
}

#indicator{
  background-color:#444338;
  color:rgb(190, 190, 202);
  padding:5px;
  border-radius: 2px 4px;
  width:50%;
  margin:auto;
  text-align: center;
}

#router_view{
  width:90%;
  height:200px;
  border:1px solid blue;
  margin:auto;
  overflow:auto;
  margin-top:10px;
}
.center{
  text-align: center;
}
</style>
