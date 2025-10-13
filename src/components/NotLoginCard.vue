<template>
    <b-card 
    style="width: 300px; height: 600px;"
    title="Not Logged in Yet!"
    class="mb-2">
        <b-img src="@/assets/pictures/graysmile.png"  style="max-width: 250px;"></b-img>
        <br/><br/><br/>
        <b-card-text>
            Click Button to go Login Page.
        </b-card-text>
        <br/><br/><br/>
        <b-button href="/login" variant="primary">Login Page</b-button>
        <b-card-text>  </b-card-text>
        <b-button href="/register" variant="primary">Register Page</b-button>

    </b-card>


</template>

<script>
export default {}

</script>

