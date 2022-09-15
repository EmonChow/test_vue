<template>
    <form class="form-class" v-on:submit.prevent= "handleSubmit">
        <h3 class="login">Sign up</h3>

        <div class="form-group">
            <input type="text" v-model="formData.firstname" class="form-control" placeholder="Name">
        </div>

        <div class="form-group">
            <input type="text" class="form-control"  v-model="formData.lastname" placeholder="Last Name">
        </div>

        <div class="form-group">
            <input type="email" class="form-control"  v-model="formData.email" placeholder="Email">
        </div>

        <div class="form-group">
            <input type="password" class="form-control"  v-model="formData.password" placeholder="Password">
        </div>

        <div class="form-group">
            <input type="password" class="form-control"  v-model="formData.confirm_password"  placeholder="Confirm Password">
        </div>
        <button class="btn btn-primary btn-block">Register</button>
    </form>
  </template>
  
<script>

import SignupService from '../services/Signup'
  
    export default {
        
        name : 'Signup',
        data(){
            return{
                users: null,
                formData: {
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                }
            }
        },
        methods: {
           handleSubmit(){
            console.log(this.formData);
            }
        },
        created() {
          SignupService.getSignup()
          .then(response => {
            console.log('users:', response.data);
            this.users = response.data;
          })
          .catch(error =>{console.log(error)})
        }

    }
</script>

  <style>
    
  </style>