<template>
    <div>
        <div class="header">
            <h1>App 3</h1>
            <button v-on:click="openApp(0)">Back to HomePage</button>
        </div>
        <div class="blog-appSwitcher">
            <LeftSideBar />
            <div class="blog">
                <div>
                    <h2>Welcome to App 3</h2>
                    <!-- <p v-on:click="openApp(0)">x</p> -->
                </div>
                <div>
                <p>{{ text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeftSideBar from './LeftSidebar';

export default{
    name: 'App3',
    components: {
        LeftSideBar
    },
    computed: {
      text(){
          return this.$store.state.text2
      }
  },
    methods: {
      openApp: function(id){
          this.$store.commit('openAppId',id)
      }
  }
}
</script>

<style scoped>
h2{
    color:black;
    font-size: 2pc;
}
p{
    color: black;
}
.header{
    /* background: #387cc0; */
    background: lightblue;
    height: 4pc;
}
h1{
    padding-top: 11px;
    position: absolute;
    left: 3%;
    color: black;
}
.blog-appSwitcher{
    display: flex;
}
.blog{
    margin-left: 30px;
    width: 35pc;
}
button{
    position: absolute;
    right: 4pc;
    border: 0;
    background: white;
    height: 2pc;
    font-weight: 600;
    top: 15px;
    border-radius: 4px;
    cursor: pointer;
}
</style>
