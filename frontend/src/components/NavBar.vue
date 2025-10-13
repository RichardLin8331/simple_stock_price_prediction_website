<template>
<div>
  <b-navbar toggleable="md" type="light" class="my_navbar">
    <b-navbar-brand href="/">Stock Price Prediction</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-for="navItem in navList" :key="navItem.id">
        <b-nav-item :href=navItem.item[1]>{{ navItem.item[0] }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="loginstatus" right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Hello {{ username }}</em>
          </template>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item-btn  v-on:click = "logout_button">Logout</b-dropdown-item-btn>
          
        </b-nav-item-dropdown>
        

        <b-nav-item-dropdown v-else right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="/login">Login</b-dropdown-item>
          <b-dropdown-item href="/register">Register</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import {apiUserLogout} from '@/apis/userapi.js'
import store from '@/store';
export default {
  name: "NavBar",
  data() {
    return {
      navList: [
        //{ id: 1, item: ["Favorite", "#"] },
        { id: 1, item: ["Search Stock", "/search_stock"]},
      ],
      loginstatus : this.$store.getters.get_login,
      username: store.getters.get_username
    };

    
  },
  methods: {
    logout_button() {
      apiUserLogout()
    }
  }
};
</script>

<style lang="scss" scoped>
  ::v-deep .my_navbar {
    background:linear-gradient(to right, rgba(149, 164, 229, 0.5), rgba(238, 27, 227, 0.5));
    .nav-link {
      font-weight: bold;
      color: rgb(118, 118, 230);
    }
    .navbar-brand {
        color: rgb(52, 30, 87);
        font-family: "tss";
        font-size: 30px;
    }
  
  }


  .gradient-custom {
    background: #667eea;
    //background: -webkit-linear-gradient(to right, rgba(142, 158, 233, 0.5), rgba(44, 189, 75, 0.5));
    background: linear-gradient(to right, rgba(149, 164, 229, 0.5), rgba(238, 27, 227, 0.5))
  }


</style>