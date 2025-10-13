<template>
    <b-card 
    style="width: 300px; height: 600px;"
    title="Great!"
    class="mb-2">
        <b-img :src="profile_picture"  style="max-width: 250px;"></b-img>
        <br/><br/><br/>
        <b-card-text>
            Hello {{ username }}, have a nice day.
        </b-card-text>
        <br/><br/><br/>
        <b-button href="/profile" variant="primary">Profile Page</b-button>

    </b-card>


</template>

<script>

export default {
    data() {
        return {
            username: this.$store.getters.get_username,
            profile_picture: require('@/assets/pictures/' + this.$store.getters.get_profile_picture)

        }
        
    },
}

</script>
