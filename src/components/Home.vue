
<template>
   <div>
      <h1 v-if="user"> Welcome to Our Home. </h1>
   </div>
</template>


<script>
   import axios from 'axios'
   export default {
      name: 'Home',
      data(){
         return{
            user: null
         }
      },
  
   async created(){
     const response = await axios.get('http://127.0.0.1:8000/api/user',{
         headers:{
            Authorization: 'Bearer' + localStorage.getItem('token')
         }
        
       })
      this.user =response.data
      
       }
      
   }
  

</script>



<style scoped>

</style>
