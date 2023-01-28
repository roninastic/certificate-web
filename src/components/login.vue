<template>
  <div class="login" >
    <h1>Login to Web App</h1>
    <p>{{ username }}</p>
    <form @submit.prevent="onlogin">
      <p>
        <input
          type="text"
          name="login"
          v-model="user.username"
          placeholder="Username or Email"
        />
      </p>
      <p>
        <input
          type="password"
          name="password"
          v-model="user.password"
          placeholder="Password"
        />
      </p>
      <p class="remember_me">
        <label>
          <input type="checkbox" name="remember_me" id="remember_me" />
          Remember me on this computer
        </label>
      </p>
      <p class="submit"><input type="submit" name="commit" value="Login" /></p>
    </form>

   
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name:'Login',
  data: function () {
    return {
      user:{
      username: "",
      password:""
      }
    };
  },
   methods: {
    onlogin() {
      
      axios
      .post('http://10.10.104.87:4040/cmsdbapi/UserAccounts/login',this.user)
      .then(response => {
        console.log(response.data);
        localStorage.setItem("credentials",response.data.id)
        localStorage.setItem("userId",response.data.userId)
        this.$router.push("/selection")
        this.$router.go()
      })
       .catch(error => {
         console.log(error)
         alert("Login Failed")}
         )
       
  
    },
  },
 
mounted () {
}
}

</script>

<style>
</style>