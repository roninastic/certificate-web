<template>
<div class="datas">
     <p><b>Enrollment Number:</b>{{studentdata.stuEnroll}}</p>
    <p><b>Student ID: </b>{{studentdata.stuCollegeId}}</p>
    <p><b>Mobile Number:</b> {{studentdata.stuMobile}}</p>
    <p><b>Department:</b> {{studentdata.fDeptId}}</p> 
    <p><b>Gender:</b> {{studentdata.stuGender = "Female"?"Female":"Male"}}</p>
    
</div>    

</template>

<script>
export default {
    props: ['studentdata'],
    name: "datas",
};
</script>
<style >
.datas{
    margin: 10px;
    padding-top: 1em;
    width: 100%;
    font-size: 17px;
    padding: 20px;
   border: 1px solid black;
}
.datas p{
    margin: 10px;
    
    

}

</style>