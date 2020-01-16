import home from './components1/home.vue'
import my_new_world from './components1/my_new_world.vue'
import store_data_compo from './components1/store_data_compo.vue'
import axios_data_store from './components1/axios_data_store.vue'

import axios_payload from './components1/axios_payload.vue'
import make_list from './components/make_list.vue'
import test_record from './components/test_record.vue'
import post_to_mongo from './components1/post_to_mongo.vue'
import get_data_in_table from './components1/get_data_in_table.vue'


export default[
    { path:"/", component:home},
    { path:"/home", component:home},
    { path:"/store data", component:store_data_compo},
    { path:"/my new world", component:my_new_world},
    { path:"/axios data store", component:axios_data_store},
    { path:"/axios payload", component:axios_payload},
    { path:"/post to mongodb", component:post_to_mongo},
    { path:"/make", component:make_list},
    { path:"/get data in table", component:get_data_in_table},
   
    { path:"/mytest", component:test_record}

]