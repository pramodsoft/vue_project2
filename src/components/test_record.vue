<template>
  <div id="test_record">
    <h1>It is used to fatch data from database </h1>
    <button v-on:click="get_data_base_record">Click to know all data in database</button>
      <div> {{database_record}} </div>
      
      
      <div class="myrecord" v-for="mydata in database_record" v-bind:key="mydata._id"> 
        {{mykey=Object.keys(mydata) }}

          
      

      <div v-for="(thekey,index) in mykey" v-bind:key="index"><h1>{{thekey}}</h1>
      <div><u>key:</u> is <u>{{thekey}} </u> and <u>value </u> is <u> {{mydata[thekey]}} </u></div>
      </div>
        </div>
        <update_database></update_database>
  </div>
</template>

<script>
import update_database from '../components/update_database.vue'
export default {
  components: {
    update_database
    
  },
  data(){
    return{
     
    }
  },
  
computed:{
  database_record:function(){
    return this.$store.state.database_data;
  },
  
},
methods:{
  get_data_base_record:function(){
    
    this.$store.dispatch("get_database_record");
  }
},
created(){
  
}
}
</script>

<style scoped>
#test_record{
  text-align:center;
}

.myrecord{
  background-color:yellowgreen;
  margin-top: 5px;
  border-radius: 5px 5  px;
}


</style>






