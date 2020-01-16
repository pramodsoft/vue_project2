<template>
<div>
<div>First Name:<input type="text" v-model="mydata.name"> </div>
<div>Last Name:<input type="text" v-model="mydata.last_name"> </div>
<div>School:<input type="text" v-model="mydata.school"> </div>

<div><button v-on:click="send_post"> SUBMIT</button> </div>
<div v-show="indicator">Please Fill All Input Field</div>
{{mynewdata}} 

<div>test:{{mytestdata}}</div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            mydata:{name:"",last_name:"",school:""},
            
        }

    },

    computed:{
    mynewdata:function(){
     
        return this.$store.state.store_test_data;
        
    },
    mytestdata:function(){
     
        return this.$store.state.my_test_data;
        
    },

    indicator:function(){
        if(this.mydata.name!="" && this.mydata.last_name!="" && this.mydata.school!=""){
            return false
        }else{
            return true;
        }
    }


    
    },

    methods:{
        send_post:function(){
            let send_post_data={name:this.mydata.name,last_name:this.mydata.last_name,school:this.mydata.school}
            this.$store.dispatch("get_array_from_data",send_post_data);
            
        }

    }



    
}
</script>

<style scoped>
div{
    text-align:center;
    margin:5px;
}


</style>