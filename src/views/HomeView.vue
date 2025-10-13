<template>
    <b-container fluid="sm" style = "max-width:90%">
        <h1>skAIrocKet Home Page</h1>
        <b-row>
            <b-col>
                <TrendList></TrendList>
            </b-col>
            <b-col>
                <br>
                <b-img src="@/assets/pictures/AIrocket.png" fluid-grow alt="Responsive image" style="max-width: 350px;"></b-img>
                <p>
                    Let skAIrocKet help you find stocks with high potential!
                </p>
            </b-col>
            <b-col>
                <LoggedInCard v-if="logged_in"></LoggedInCard>
                <NotLoginCard v-else></NotLoginCard>
            </b-col>
        </b-row>
        
    </b-container>
    
</template>

<script>
import TrendList from "@/components/TrendList.vue";
import NotLoginCard from "@/components/NotLoginCard.vue";
import LoggedInCard from "@/components/LoggedInCard.vue";
import store from "@/store";

export default { 
    data () {
        return {
            logged_in: store.getters.get_login
        }
    },
    components: { TrendList, NotLoginCard, LoggedInCard },
    
}
</script>