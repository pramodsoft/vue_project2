<template>
    <div>
       <div> {{mydata}} </div>
       <input type="text" v-model="send_data">
       <button v-on:click="send_data_to_store">send data to server</button>
       

    </div>
</template>

<script>
export default {
    data(){
        return{
            send_data:"",  
        }
    },

    computed:{
    mydata:function(){
     
        return this.$store.state.store_test_data;
        
    },
    
    },

methods:{
    send_data_to_store:function(){
      alert("the shown data send to store "+this.send_data);

      this.$store.dispatch("get_data_to_store",this.send_data);


    
    }
  },
    
}
</script>

<style scoped>

</style>