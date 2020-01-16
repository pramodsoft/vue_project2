<template>
<div>
    <h1>MY POST DATA  </h1>
{{loading_status}}
{{my_new_data}}

<div v-for="my_post in my_new_data" v-bind:key="my_post.id">
{{mypost}}
<div class="mypost"> 
  <div class="mytitle" v-on:click="show_post_body(my_post)">  {{my_post.title}} {{my_post.show_status}} </div>
  <div class="postbody" v-if="my_post.show_status">  {{my_post.body}}  </div>
    
    
    </div>
</div>

</div>
    
</template>
<script>
export default {
    name:"fatch_data",
    data(){
        return{
            loading_status1:"Loading_new....",
            
        }
    },

  computed:{
      
      loading_status:function(){
          return this.$store.state.loading_status;
      },
      my_new_data:function(){
          return this.$store.getters.myfatchdata;
      }, 
      
      
  },
  mounted:{
 
  },
  methods:{
      show_post_body:function(my_post){
         
          if(my_post.show_status==false){
          my_post.show_status=true;
          }else{
              my_post.show_status=false;
          }
          alert(my_post.show_status); 
      }
  },
  
}
</script>

<style scoped>
.mytitle{
    background-color:burlywood;
    border-radius: 5px 5px;
    padding:5px;
    text-align: center;
    box-shadow: 1px 1px 2px #000000;
    margin-bottom: 5px;
}
.mypost{
    margin:5px 10px;
    width:70%;
    margin:auto;
}
h1{
    text-align: center;
}

</style>