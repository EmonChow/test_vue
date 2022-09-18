<template>
    <form class="form-class" v-on:submit.prevent= "handleSubmit">
        <h3 class="login">Sign up</h3>

        <div class="form-group">
            <input type="text" v-model="formData.name" class="form-control" placeholder="Name">
        </div>

        <div class="form-group">
            <input type="email" class="form-control"  v-model="formData.email" placeholder="Email">
        </div>

        <div class="form-group">
            <input type="password" class="form-control"  v-model="formData.password"  placeholder=" Password">
        </div>
        <button class="btn btn-primary btn-block">Register</button>
    </form>
  </template>
   
<script>
   import axios from 'axios'

  
    export default {
        
        name : 'Registration',
        data(){
            return{
               
                formData: {
                    name: "",
                    email: "",
                    password: "",
                }
            }
        },
        methods: {
            async handleSubmit(){
               await axios.post('http://127.0.0.1:8000/api/register', this.formData);
               this.$router.push('/login')
               JSON.parse(JSON.stringify(this.formData))
      }
     
   },
        
}
</script>

  <style>
    
  </style>