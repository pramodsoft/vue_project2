<template>
  <div>
      
      it is my make list records
      <div v-for="(name,index) in mydata" v-bind:key="index" class="myname">{{name}}-{{index}}</div>



      <input type="text"  v-model="new_member" v-on:enter="add_new_member">
      <button v-on:click="add_new_member" >Add New Member</button>
     <!-- <div v-for="(mydata,index) in myfatch" v-bind:key="index"> -->


    <!-- <div class="title">  {{mydata.title}} </div> -->
     <!-- <div class="body">{{mydata.body}} </div>  -->
     

      <!-- </div>  -->
      <fatch_data></fatch_data>
  </div>
</template>

<script>
import fatch_data from "./fatch_data.vue";
export default {
    components:{
        fatch_data,
    },
    data(){
        return{
            new_member:"",
        }
    },
    
computed:{
    mydata:function(){
     
        return this.$store.state.mycollection;
        
    },
    /*
    myfatch:function(){
        return this.$store.getters.myfatchdata;
    } */
},
created(){
    
        //this.$store.dispatch("get_data");

        this.$store.dispatch("get_post_record");
        
    
},
methods:{
add_new_member:function(){
    //this.$store.state.mycollection.push(this.new_member);
    //this.new_member="";
    this.$store.commit("add_new_member",this.new_member);
    this.new_member="";
}
}
}
</script>

<style scoped>
.myname{
    background-color: rgb(86, 119, 108);
    margin-top:5px;
    width:20%;
    text-align: center;
    color:blue;
    border-radius: 2px 3px;
    box-shadow: 2px 3px 1px #000000;
}
.title{
    margin-bottom: 5px;
    background-color:rgb(153, 179, 41);
    text-align:center;
}
.body{
    background-color: aqua;
    margin-bottom: 2px;
    border-radius:10px 10px;
    padding: 5px;
    box-shadow: 1px 2px 1px #000000;

}
</style>