<template>
  <div id="test_record">
   
<div class="myrecord" v-for="mydata in database_record" v-bind:key="mydata._id"> 
    <form >
        {{mykey=Object.keys(mydata) }}

          
      

      <div v-for="(thekey,index) in mykey" v-bind:key="index"><h1>{{thekey}}</h1>
      <div><u>key:</u> is <u>{{thekey}} </u> and <u>value </u> is <input type="text" v-bind:value='mydata[thekey]'>  </div>
     
     
     
      </div>

<input type="button" value="UPDATE" v-on:click="send_post_data(mydata)">

    </form>
  </div> 
  </div>
</template>

<script>

export default {
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
  },
  send_post_data:function(mydata){
      alert("love you manisha"+mydata);
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
  background-color:teal;
  margin-top: 5px;
  border-radius: 5px 5  px;
}
input{
    margin:5px;
}


</style>






