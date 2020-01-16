<template>
    <div>
        <div id="indicator">IT IS STORED AXIOS DATA</div>
{{axios_data}}
<div><button v-on:click="get_axios_data">Click To Get Axios Data through post  method</button></div>

<div><button v-on:click="get_axios_through_get_method">Click To Get Axios Data through get method</button></div>
    <div><button v-on:click="get_axios_through_server">Click To Get server Data through axios </button></div>
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            compo_link:"axios_data_store",
        }
    },

    computed:{
    axios_data:function(){
     
        return this.$store.state.store_axios_data;
        
    },
    },
    methods:{
        get_axios_data:function(){
            alert("post method axios data");
            this.$store.dispatch("get_data_from_axios");
        },

        get_axios_through_get_method:function(){
            alert("get method axios data");
            this.$store.dispatch("get_data_through_get_from_axios");
        },
        get_axios_through_server:function(){
            alert("axios data ");
            this.$store.dispatch("get_server_data_through_axios");
        }
    }

}
</script>
<style scoped>
div{
    text-align: center;
}
</style>