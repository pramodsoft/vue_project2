<template>
    <div id="main1">
        
        <div id="store_component1">
    {{testing_store_data}}
    <div style="clear:both;"></div>
    <div class="test_button"><button v-on:click="ALERT_AT_ACTION">CHANGE STORE DATA AT ACTION</button></div>
    <div class="test_button"><button v-on:click="ALERT_AT_MUTATION">CHANGE STORE DATA AT MUTATION</button></div>
    <div class="test_button"><button v-on:click="CHANGE_DATA_AT_ACTION_BY_MUTATION">CHANGE STORE DATA AT ACTION BY MUTATION</button></div>
    <div class="test_button"><button v-on:click="CHANGE_DATA_AT_MUTATION_BY_ACTION">CHANGE STORE DATA AT MUTATION BY ACTION</button></div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
    testing_store_data:function(){
     
        return this.$store.state.store_test_data;
        
    },
    },
    methods:{
        ALERT_AT_ACTION:function(){
            this.$store.dispatch("change_store_data_at_method");
        },
        ALERT_AT_MUTATION:function(){
            this.$store.commit("change_store_data_at_mutation");
        },
        CHANGE_DATA_AT_ACTION_BY_MUTATION:function(){
            this.$store.dispatch("change_store_data_by_method_calling_mutation");
        },
        CHANGE_DATA_AT_MUTATION_BY_ACTION:function(){
            this.$store.commit("change_store_data_at_mutation_calling_action");
          // alert("mutation by action change")
        }
    }
}
</script>

<style scoped>
.test_button{
    float:left;
    margin-left: 10px;
}


#store_component1{
    border:1px solid blue;
    float: left;
    text-align: center;
    padding: 10px;
    margin-left:0.5%;
}
</style>