<template>
    <b-container >
        <h2>Search Page</h2>
        <SearchStock></SearchStock>
    </b-container>
</template>

<script>
import SearchStock from '@/components/SearchStock.vue'

export default {
name: 'LoginView',
data(){
    return{
        profileid:"Default",
        username: "",
        password: ""
    }
},
components: {
    SearchStock
},
methods:{
    idpress(){
        this.profileid = this.tmpid
        this.username = this.tmpid
        this.password = this.tmppasswd
    }
}
}
</script>