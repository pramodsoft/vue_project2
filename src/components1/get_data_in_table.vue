<template>
    <div>

       <table>
           <tr><th>Id</th><th>Name</th><th>Last Name</th><th>Class</th></tr>
          <tr v-for="(data,index) in mydata" v-bind:key="index"><td>{{data._id}}</td> <td>{{data.name}}</td><td>{{data.last_name}}</td><td>{{data.school}}</td><td v-on:click="delete_me(data._id)" class="delete_me">Close X</td> </tr>

       </table>
       {{mydata}}
    </div>
</template>
<script>
export default {
    computed:{
        mydata:function(){
           return this.$store.state.name_data;
        }
    },
    mounted:function(){
        this.$store.dispatch("get_data_from_axios_database");
    },
    methods:{
        delete_me:function(payload){
            alert("deleteme"+payload);
            this.$store.dispatch("delete_data_from_axios_database",payload);
        }

    }
}
</script>

<style scoped>
.delete_me{
    background-color:#009933;
    cursor:pointer;
}
.delete_me:hover{
background-color:silver;
}
</style>