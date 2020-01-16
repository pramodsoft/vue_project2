<template>
    <div>
        it is home page components
       <div> {{mydata}} </div>
    </div>
</template>
<script>
export default {

computed:{
    mydata:function(){
     
        return this.$store.state.store_test_data;
        
    },
    
},
    
}
</script>
<style scoped>

</style>