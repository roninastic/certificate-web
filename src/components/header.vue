<template >
<div>
    <img alt="Vue logo" src="images/svit.png" width="15%">
    <nav v-if="isAuth"> 
                <div class="nav-links" >
                    <ul>
                        <li>  <router-link to="/selection">Home</router-link></li>
                        
                        <li>  <a href="">About</a></li>
                        <li>   <button
    id="onlogout"
    @click="handleLogout"
    >Logout</button></li>

                    </ul>
                </div>
            </nav>
</div>
    
</template>
<script>
export default {
    name:"header",
    data:()=>{
        return{
        }
    },
    computed:{
isAuth(){
    return localStorage.getItem("credentials")?true:false
}

    },
    methods:{
         handleLogout(){
localStorage.clear()
        this.$router.push("/login")
        this.$router.go()

},

    }
}
</script>
<style scoped>
nav{
  background-color:crimson;
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
}
nav img{
    width: 150px;
}
#onlogout{
    background-color: #dc143c;
    border: 0px;
    color: white;
    cursor: pointer;
}
.nav-links{
    flex: 1;
    text-align: right;

}
.nav-links ul li{
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
}
.nav-links ul li a{
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 13px;

}
.nav-links ul li ::after{
    content: '';
    width: 0%;
    height: 2px;
    background:#f44336;
    display: block;
    margin:auto;
    transition: 0.5s;
}
.nav-links ul li :hover::after{
    width: 100%;
}
</style>