<template>
    <div class="sideBar">
        <button v-for="(section, index) in sections" :key="index" v-on:click="openApp(section.data, section.sec)">App {{ appNumber }} - Section {{ section.sec }}</button>
    </div>
</template>

<script>

export default{
    computed: {
    sections(){
        return this.$store.state.arr
    },
    appNumber(){
        return this.$store.state.idToDisplay
    }
    },
    methods: {
        openApp: function(data, id){
            this.$store.commit('openAppId',{data, id})
        }
    }
}
</script>

<style scoped>
.sideBar{
    width: 9pc;
    height: calc(100vh - 64px);
    background: lightblue;
    display: flex;
    flex-direction: column;
    border-right: 7px solid lightgray;
}
button{
    border: 0;
    height: 5pc;
    margin: 5px;
    background: white;
    font-weight: 900;
    font-size: 1pc;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
}
</style>
