<template>
    <b-container >
        <h1>Register Page</h1>
        
        
        <UserCreateInput></UserCreateInput>
        <br/><br/><br/>

        <nav class = "helpstyle">
            <router-link to="/login" >Login</router-link> | 
            <router-link to="#" >Forget Password</router-link> 
        </nav>
    </b-container>
</template>
  
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import UserCreateInput from '@/components/UserCreateInput.vue'

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
    UserCreateInput
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
<style scoped lang="scss">
.headdiv {
    position: relative;
    width:100%;
	height:700px;
	float:right;
}
.seconddiv {
    position:absolute;
    right: 18%;
    width:20%;
    top: 15%;
}

.helpstyle {
    a {
        color: rgb(177, 172, 172);
    }
    a:hover {
        color:rgb(62, 59, 56);
    }
}
h1 {
    font-family: "tss";
}

</style>
  