<template>
  <div class="hello">
    <h1>{{indicator}}--{{welcome}} </h1>
    <h1>hi it is me {{myname}}</h1>
    <button v-on:click="change_name">click</button>
    <h1>{{mynewname}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["welcome"],
  data(){
    return{
      myname:"pramod",
      indicator:"",
    }
  },
  methods:{
    change_name:function(){
      if(this.myname=="PRAMOD"){
        this.myname="VINOD";
      }else{
         this.myname="PRAMOD";
      }
      
    }
  },
  computed:{
    mynewname:function(){
      return this.myname;
    }
  },
  watch:{
    myname:function(){
      this.indicator="your name changed successfully";
      setTimeout(() => {
       this.indicator=""; 
      }, 3000);
    }
  }
  

}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
  background-color:black;
  color:white;
  width:50%;
  margin:auto;
}
</style>
