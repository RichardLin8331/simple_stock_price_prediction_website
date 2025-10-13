<template>
    <div>
        <h2>{{ stocknum }}</h2>
        <div v-show=logged_in>
            <b-button v-if="IsInFavorite" v-on:click="deletefavoritebutton">Delete From Favorite</b-button>
            <b-button v-else v-on:click="addfavoritebutton">Add Favorite </b-button>

        </div>
        <b-table :items="items">
            <template #cell(prediction_confidence)="data">
                {{ data.value }} %
            </template>
        </b-table>
        
    </div>
</template>

<script>

import {apiSearchStock, apiAddFavorite, apiDeleteFavorite} from "@/apis/sockapi"
export default {
    data() {
        return {
            stocknum : this.$route.params.stocknum,
            logged_in: this.$store.getters.get_login,
            items: [
                {predicted_price: 0, prediction_confidence: 0,}
            ],
            
        }
        
    },
    computed: {
        IsInFavorite: function() {
            if(this.$store.getters.get_stock_in_favorite(this.$route.params.stocknum) == -1) return false
            else return true
        }
    },
    methods: {
        addfavoritebutton(event) {
            event.preventDefault()
            apiAddFavorite(this.$route.params.stocknum)
        },
        deletefavoritebutton(event) {
            event.preventDefault()
            apiDeleteFavorite(this.$route.params.stocknum)
        },
        
    },
    created() {
        apiSearchStock(this.$route.params.stocknum)
        .then(() => {
            this.items[0].predicted_price = localStorage.getItem('predicted_price')
            this.items[0].prediction_confidence = localStorage.getItem('prediction_confidence')
        })
        
        
        
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