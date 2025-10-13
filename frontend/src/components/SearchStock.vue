<template>
    <b-form @submit="onSubmit"  >
        <b-form-input
            id="input-1"
            v-model="form.stocknum"
            placeholder="Enter Stock Number"
            required
          ></b-form-input>
          <b-button type="submit" variant="primary" pill>Submit</b-button>
    </b-form>
    
</template>

<script>

  import router from "@/router";
//import { apiUserCreate } from "../apis/userapi.js";

  export default {
    data() {
      return {
        form: {
          stocknum:''
          
        },
        nottrue: false,
        show: true,
        
      }
    },
    methods: {
      onSubmit(event) {
        
        event.preventDefault()
        var stockpath = '/stock_info/' + this.form.stocknum
        router.push({path: stockpath})
        // apiUserCreate(this.form.stocknum)
        // alert(JSON.stringify(this.form))
      },
      
    }
  }
</script>