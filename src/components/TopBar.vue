<template>
<div>
<nav>
    <ul>
        <li v-for="item in nav_items"  v-bind:key="item">
            
            
            <router-link v-bind:to="item">{{item}}</router-link>
        
        
        
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
            nav_items:["home","about us","contact us","list","make"],  
        }
    }

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
}
ul li a{
    text-decoration: none;
}

</style>