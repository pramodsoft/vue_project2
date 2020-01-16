import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";




Vue.use(Vuex);
//use should be of small case

export const store = new Vuex.Store({
state:{
    mycollection:["east","west","north","south"],
    myfatch:"",
    loading_status:"Loading....",
    show_status:"",
    database_data:"Loading.....",
    post_data:"Post the Loading....",
    store_test_data:"DATA DIRECTLY CALL FROM STORE",
    store_axios_data:"it is axios data",
    my_test_data:"default",
    name_data:[{name:"test",last_name:"test",school:"test"}],
    useless:"",
}, 
getters:{
    myfatchdata:function(state){
        return state.myfatch;
    }
},



actions:{
    change_store_data_at_method:function(){
        alert("alert at action side");
        this.state.store_test_data="STORE DATA CHANGED AT ACTIONS OF STORE";
        
    },
    change_store_data_by_method_calling_mutation:function(){
        alert("calling mutation through action");
        this.commit("change_store_data_at_mutation")
    },
    get_data_from_axios:function({state}){
        alert("get data from server through axios api");
        axios.post("http://localhost:3000/server_data").then(function(response){
            state.store_axios_data=response.data;

         });
    },

    get_data_through_get_from_axios:function({state}){
        alert("get data from server through axios api");
        axios.get("http://localhost:3000/server_data").then(function(response){
            state.store_axios_data=response.data;

         });
    },
    get_server_data_through_axios:function({state}){
        alert("get axios data");
        axios.post("http://localhost:3000/axios_data").then(function(response){
            state.store_axios_data=response.data;

         });
    },

    get_data_to_store:function(pramod,payload){
        alert("payload received at store is "+ payload);
        this.state.store_test_data="data send to state  "+payload;
    },

    get_array_from_data:function({state},payload){
        state.my_test_data=payload;
        axios.post("http://localhost:3000/send_post_data",payload).then(function(response){
            state.store_test_data=response.data;

         });
    },
    get_name_data_from_data:function({state},payload){
        state.name_data=payload;
        axios.post("http://localhost:3000/send_post_data",payload).then(function(response){
            state.store_test_data=response.data;

         });
    },

    get_data_from_axios_database:function({state}){
        alert("get data from server through axios api");
        axios.get("http://localhost:3000/server_data").then(function(response){
            state.name_data=response.data;

         });
    },
    delete_data_from_axios_database:function(pramod,payload){
        alert("delete me  at store "+payload);
        
        this.commit("delete_data_from_name_data",payload)
    },

   
    get_post_record:function({commit,state}){
        axios.get("http://localhost:3000/server_data")
        .then(function(response){
            state.loading_status="";
            commit("CHANGE_STATE",response.data);
        })
    },
    
    get_database_record:function({state}){
        axios.get("http://localhost:3000/mytest").then(function(response){
           state.database_data=response.data;
        });
    },
    post_data_to_server:function({state},payload){
        axios.get("http://localhost:3000/post_data",payload).then(function(response){
           state.database_data=response.data;
        });
    }
    
},

mutations:{    
        change_store_data_at_mutation:function(){
            alert("alert at mutation side ");
            this.state.store_test_data="STORE DATA CHANGED AT MUTATION OF STORE";
        }, 
        delete_data_from_name_data:function(dummy,payload){
            alert("name data"+payload);

        },

        change_store_data_at_mutation_calling_action:function(){
            alert("calling action through mutation");
            this.dispatch("change_store_data_at_method");
        },
    add_new_member:function(state,payload){
    state.mycollection.push(payload);
    },

    CHANGE_STATE:function(state,payload){

        
        for(let i=0;i<payload.length;i++){   
            
            payload[i].show_status=false;
        }
        

    state.myfatch=payload;
    }
}

});



  