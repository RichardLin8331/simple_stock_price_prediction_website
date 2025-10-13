<template>
  <div>
    <b-img alt="Vue logo" :src='selectedpic' rounded = true style="max-width: 250px;"></b-img> <br/>
    <b-form @submit="onSubmit"  v-if="show" >
      
      <b-row class = "spacer">
        <b-col md = "3"></b-col>
        <b-col>
          
          <b-form-input
            id="input-1"
            v-model="form.username"
            placeholder="Enter Username"
            required
          ></b-form-input>
        </b-col>
        <b-col md = "3"></b-col>
      </b-row>

      <b-row class = "spacer">
        <b-col md = "3"></b-col>
        <b-col>
          <b-form-input
            id="input-1"
            v-model="form.useremail"
            placeholder="Enter Email"
            required
          ></b-form-input>
        </b-col>
        <b-col md = "3"></b-col>
      </b-row>

      <b-row class = "spacer">
        <b-col md = "3"></b-col>
        <b-col>
          <b-form-select required v-model="form.profile_picture" :options="options"></b-form-select>
        </b-col>
        <b-col md = "3"></b-col>
      </b-row>
      
      <b-row class = "spacer">
        <b-col md = "3"></b-col>
        <b-col >
          <b-form-input
            id="input-1"
            v-model="form.password"
            placeholder="Password"
            required
            
          ></b-form-input>
        </b-col>
        <b-col sm="auto">
          <b-button type="submit" variant="primary" :disabled="showtest">Submit</b-button>
        </b-col>
        <b-col md = "3"></b-col>
      </b-row>
    


    </b-form>
    
  </div>
</template>

<script>

  import { apiUserCreate } from "../apis/userapi.js";
  
  export default {
    data() {
      return {
        form: {
          username: '',
          useremail: '',
          password: '',
          profile_picture: '',
          
        },
        nottrue: false,
        show: true,
        pic_src: require("../assets/pictures/graysmile.png"),
        
        selected: null,
        options: [
          { value: "graysmile.png", text: 'Please select profile picture color' , disabled: true},
          { value: "bluesmile.png", text: 'Blue' },
          { value: "redsmile.png", text: 'Red' },
          { value: "yellowsmile.png", text: 'Yellow' },
          { value: "purplesmile.png", text: 'Purple' },
        ]
        
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        apiUserCreate(this.form)
        //alert(JSON.stringify(this.form))
      },
      
      
    },
    computed: {
      selectedpic: function() {
        if (this.form.profile_picture == '') {
          return require("../assets/pictures/graysmile.png" )
        }
        else return require("../assets/pictures/" + this.form.profile_picture)
      },
      showtest: function() {
        if(this.form.profile_picture == '') return true
        else return false
      }
    }
  }
</script>

<style>
  .spacer {
      padding-top: 20px;
      padding-bottom: 14px
  }
</style>