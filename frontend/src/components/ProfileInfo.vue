<template>
    <b-container fluid="sm" style = "max-width:90%">
       <b-row>
           <b-col>
               <h2>Hello {{ username }}</h2>
               <b-img :src="profile_picture" style="max-width: 360px;"></b-img>
           </b-col>

           <b-col>
                <br/>
                <b-card no-body header = "Your Favorite Stocks" class = "card_title" >
                    <b-card-body  class = "card_body">
                        <b-table :items="favorite_list">
                            <template #cell(stocknum)="data">
                                <a :href="`/stock_info/${data.value}`">{{ data.value }}</a>
                            </template>
                        </b-table>
                    </b-card-body>
                </b-card>
           </b-col>
       </b-row>
    </b-container>
</template>

<script>


export default{
   data() {
       return {
           username: this.$store.getters.get_username,
           profile_picture: require('@/assets/pictures/' + this.$store.getters.get_profile_picture),
           favorite_list: [],
       }
   },

   created() {
         var list_tmp = this.$store.getters.get_favorite_list
         var i
         for(i of list_tmp) {
            this.favorite_list.push({stocknum: i})
         }
         
   }
}
</script>

<style lang="scss" scoped>
.card_title {
    background:linear-gradient(to right, rgba(199, 100, 229, 0.5), rgba(238, 27, 227, 0.5));
    
}
.card-body {
    background: white;
    position:relative; 
    height:500px; 
    overflow-y:scroll; 
}
</style>