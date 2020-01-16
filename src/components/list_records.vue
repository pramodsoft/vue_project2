<template>
  <div>
      it is for list record component
        {{my_new_data}}
  </div>
</template>

<script>
export default {
computed:{
    my_new_data:function(){
        return this.$store.state.mycollection;
    }
}
}
</script>

<style>

</style>