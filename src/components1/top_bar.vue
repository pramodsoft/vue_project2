<template>
<div id="main">
   <div id="indicator"> <slot></slot> </div>
<nav>
    <ul>
        <li v-for="item in nav_items"  v-bind:key="item"  >
            <router-link v-bind:to="item" class="linktab">{{item}} </router-link>
           
        </li>






    </ul>


</nav>

</div>
  
</template>

<script>
export default {
    name:"topbar",
    data(){
        return{
            nav_items:["Home","My New World","Store Data","Axios Data Store","Axios payload","POST TO MONGODB","GET DATA IN TABLE","List","Make"],  
        }
    },
    
}
</script>

<style scoped>

ul{
    background-color: azure;
    text-align: center;
}
ul li{
    text-decoration:none;
    display:inline;
    margin:5px;
    
    padding: 5px;
    
}
.linktab{
  text-decoration:none;
    display:inline;
    margin:5px;
    background-color:rgb(11, 167, 89);
    color:#000000;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 1px 2px 1px #000000;  
}
.router-link-active{
    text-decoration:none;
    display:inline;
    margin:5px;
    color:#fff;
    background-color:chocolate;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 1px 2px 1px #000000;
}


ul li a{
    text-decoration: none;
}

span{
    width:justify;
}
#router_link{
  text-align: center;
}

</style>