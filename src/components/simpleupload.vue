<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div class="field" >
      <label for="file" class="label"></label>

      <div class="file-choose-button">
      <label class="file-label">
        <input type="file" ref="file" @change="selectFile"  class="file-input"/>
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
        </span>
          <span class="file-label">Choose a file...</span>
        <span v-if="file" class="file-name">{{file.name}}</span>


      </label>
      </div>

      
    </div>
    <div class="field">
      <button class="button-is-info">send</button>
      <button  @click="$emit('onPreview')" class="button-is-info" type="button">preview</button>
    </div>
  </form>



</template>
<script>
import axios from "axios";

export default {
  name: "SimpleUpload",

  data:()=>{
    return{
      file: "",
    }
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    async sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        await axios.post("upload", formData);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

</script>

<style>
body{
    font-family: Lucida Sans;
    
}

.file-choose-button{
    background-color:forestgreen;
  border: none;
  color: white;
  padding: 6px 17px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;
  margin: 4px 1px;
  cursor: pointer;
  display: table-cell;
  vertical-align: middle;
  border-radius: 30px;
}

.button-is-info{
   background-color:forestgreen;
  border: none;
  color: white;
  padding: 7px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;
  margin: 3px 1px;
  cursor: pointer;
  display: table-cell;
  vertical-align: middle;
  border-radius: 30px;
}

</style>