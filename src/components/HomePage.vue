<template>
    <div id='homePage'>
        <div id="blog">
            <h1>Blog Application</h1>
        </div>
        <div id="openApp">
            <div class="appButton">
                <p>App 1 ></p><button v-on:click="setAppNumber(1)">App 1</button>
            </div>
            <div class="appButton">
                <p>App 2 ></p><button v-on:click="setAppNumber(2)">App 2</button>
            </div>
            <div class="appButton">
                <p>App 3 ></p><button v-on:click="setAppNumber(3)">App 3</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'HomePage',
    methods: {
        openApp: function(id){
            this.$store.commit('openAppId',id)
        },
        setAppNumber: function(no){
            this.$store.commit('setAppNo', no)
        }
    }
}
</script>

<style scoped>
#homePage{
    height: 100%;
    background: #e1f5fe;
}
#blog{
    padding-top: 15vh;
}
h1{
    font-size: 4pc;
}
#openApp{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3pc;
}
.appButton{
    display: flex;
    flex-direction: row;
}
button{
    background: #00538C;
    border: 0;
    border-radius: 5px;
    width: 5pc;
    height: 3pc;
    cursor: pointer;
    margin-left: 1pc;
    font-weight: 800;
    color: white;
}
p{
    font-weight: 800;
}
</style>
