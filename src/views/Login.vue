<template>
    <form class="form-class" @submit.prevent="handleSubmit()">
        <h3 class="login">Login</h3>

        <div class="form-group">
            
            <input type="email" class="form-control" v-model="formData.email" placeholder="Please Enter your email">

        </div>

        <div class="form-group">
        
            <input type="password" class="form-control" v-model="formData.password" placeholder="Please Enter your Password">

        </div>

        <p v-if="errorMessage">{{errorMessage}}</p>

        <button class="btn btn-primary btn-block">Login </button>
    </form>
  </template>
  

  <script>
    import axios from 'axios'
    export default{
        name: 'Login',
        data(){
            return{
                errorMessage: "",
                formData: {
                    email:'',
                    password:''
                }
            }
        },
        methods: {
           async handleSubmit(){
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login',this.formData);
                if (response.data.success) {
                    localStorage.setItem('token', response.data)
                    this.$router.push('/home')
                } 
            } catch (error) {
                this.errorMessage = error.response.data.message;
            }
            }
        },
    }
  </script>

  <style>
    .form-class{
        border-radius: 100px;
        margin-top: 10px;
    }

    .login {
        height: 40px;
    }

    .form-group {
    border-radius: 5%;
    height: 40px;
    font-weight: 100;
    margin-bottom: 10px;

  }
  </style>
  