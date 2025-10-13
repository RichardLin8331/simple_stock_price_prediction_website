

<template>
    <b-card no-body header = "Top 10 Stock" class = "card_title" >
        <b-card-body  class = "card_body">
            <b-table :items="items">
                <template #cell(Num)="data">
                    <a :href="`/stock_info/${data.value}`">{{ data.value }}</a>
                </template>
            </b-table>
        </b-card-body>
    </b-card>

</template>

<script>
    export default {
        data() {
            return {
                items: [
                {Num: "3231"},
                {Num: "2317"},
                {Num: "2382"},
                {Num: "2618"},
                {Num: "2356"},
                {Num: "2891"},
                {Num: "2303"},
                {Num: "2371"},
                {Num: "1815"},
                {Num: "3481"},

            ]
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