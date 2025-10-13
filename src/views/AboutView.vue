<template>
  <div class="about">
    <b-row>
      <b-col></b-col>
      <b-col md = "auto"><AboutCard></AboutCard></b-col>
      <b-col></b-col>
    </b-row>
    
  </div>
</template>

<script>
import AboutCard from "@/components/AboutCard.vue"

export default {
  components :{
    AboutCard
  }
}
</script>
