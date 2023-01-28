<template>
  <div class="hello">
   
  </div>
</template>

<script>
export default {
    
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  background-color: indigo;
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;
    
}
nav img{
    width: 150px;
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
