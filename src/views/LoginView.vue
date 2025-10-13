<template>
    <b-container >
        
        <b-row>
            
            <b-col></b-col>
            <b-col></b-col>
            <b-col>
                <h1>Login Page</h1>
                <img alt="Vue logo" src="../assets/logo.png" class="headimg"> <br/>
                
                <LoginInput></LoginInput>
                <br/><br/><br/>

                <nav class = "helpstyle">
                    <router-link to="register" >Register</router-link> | 
                    <router-link to="#" >Forget Password</router-link> 
                </nav>
            </b-col>
    </b-row>
</b-container>
</template>
  
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import LoginInput from '@/components/LoginInput.vue'

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
    LoginInput,
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





</style>
  