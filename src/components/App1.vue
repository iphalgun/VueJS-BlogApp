<template>
    <div>
        <div class="header">
            <h1>App {{ appNumber }}</h1>
            <button v-on:click="setAppNumber(0)">Back to HomePage</button>
        </div>
        <div class="blog-appSwitcher">
            <LeftSide />
            <div class="blog">
                <div>
                    <h2>Welcome to App {{ appNumber }}</h2>
                </div>
                <div>
                    <slot name="section-blog"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeftSide from './LeftSidebar'
 export default {
  name: 'App1',
  components: {
    LeftSide
  },
  computed: {
    text(){
        return this.$store.state.text
    },
    appNumber(){
        return this.$store.state.idToDisplay
    }
  },
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
h2{
    color:black;
    font-size: 2pc;
}
p{
    color: black;
}
.header{
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