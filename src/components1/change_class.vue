<template>
    <div id="main">
    <div>  <h1><slot></slot></h1> </div>
        <div id="indicator"> {{indicator}} </div>
    
    <div v-bind:class="{change_color:mycolor}">change of background color (CHANGE_COLOR CLASS) on click events</div>
    <div v-bind:style="{width:mywidth+'%',color:my_change_color}" style="background-color:red">change in width and text color with click event</div>
    <button v-on:click="alertme">click to show change in class </button>
    </div>
</template>
<script>
export default {
    
    data(){
    return{
     indicator:"This Element Show The Change In Class Effect and slot examples",
     mywidth:90,
      mycolor:false,
      my_change_color:"blue",
    }
  },
  methods:{
    alertme:function(){
      
      if(this.mycolor==false){
      this.mycolor=true;
      this.mywidth=60;
      this.my_change_color="green";
      }else{
        this.mycolor=false;
        this.mywidth=90;
        this.my_change_color="blue";
      }
    }
  },
}
</script>

<style scoped>
div{
  margin:5px;
}
.change_color{
background-color:blueviolet;
text-align: center;
width:60%;
margin:auto;
}


button{
  margin-top:5px;
}
</style>