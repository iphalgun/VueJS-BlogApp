import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    // state:{
    //     text: 'Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow. Redux solves this problem by managing application’s state with a single global object called Store. Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier.More importantly, it gives you live code editing combined with a time-travelling debugger. It is flexible to go with any view layer such as React, Angular, Vue, etc.', 
    //     idToDisplay: 0,
    //     text2: 'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.'
    // },
    state:{
        text: 'Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow. Redux solves this problem by managing application’s state with a single global object called Store. Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier.More importantly, it gives you live code editing combined with a time-travelling debugger. It is flexible to go with any view layer such as React, Angular, Vue, etc.', 
        idToDisplay: 0,
        text2: 'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.',
        
        sectionText: [
            {idToDisplay: 1,
            section: [
                {
                    sec:1,
                    data: 'Redux is a predictable state container for JavaScript apps.'
                },
                {
                    sec:2,
                    data: 'Vue is a progressive framework for building user interfaces.'
                },
                {
                    sec:3,
                    data: 'As the application grows, it becomes difficult to keep it organized and maintain data flow.'
                },
                {
                    sec:4,
                    data: 'Redux solves this problem by managing application’s state with a single global object called Store.'
                }
            ]},{
                idToDisplay: 2,
            section: [
                {
                    sec:1,
                    data: 'It is flexible to go with any view layer such as React, Angular, Vue, etc.'
                },
                {
                    sec:2,
                    data: 'Vue is a progressive framework for building user interfaces.'
                },
                {
                    sec:3,
                    data: 'Vue is designed from the ground up to be incrementally adoptable.'
                }
            ]
            },{
                idToDisplay: 3,
            section: [
                {
                    sec:1,
                    data: 'Redux solves this problem by managing application’s state with a single global object called Store.'
                },
                {
                    sec:2,
                    data: 'It is flexible to go with any view layer such as React, Angular, Vue, etc.'
                }
            ]
            }
        ],
        arr: [],
    },
    // getters: {
    //     saleProducts: state => {
    //     }
    // }, 
    // mutations: {
    //     reducePrice: state => {
    //         //wokring
    //     }
    // }, 
    mutations: {
        // openAppId: (state, payload) => {
        //     state.idToDisplay = payload
        //     if(payload == 1){
        //         state.text = "Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow."
        //     } if(payload == 2){
        //         state.text = "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects."
        //     }
        //     if(payload == 3){
        //         state.text = "3On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries."
        //     }
        // }
        openAppId: (state, payload) => {
            //state.idToDisplay = payload
            console.log(payload)
            // for(int i=0;i<state.sectionText.length;i++;){
            //     if(state.sectionText[i].idToDisplay == payload.idToDisplay){
            //         console.log(state.sectionText[i].idToDisplay)
            //     }
            // }
            state.text = payload.data
            // state.sectionText.map(a => console.log("one",a))
            // if(payload == 1){
            //     state.text = "Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow."
            // } if(payload == 2){
            //     state.text = "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects."
            // }
            // if(payload == 3){
            //     state.text = "3On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries."
            // }
        },
        setAppNo: (state, payload) => {
            console.log("final",payload)
            state.idToDisplay = payload
            let a = payload - 1;
            state.arr = state.sectionText[a].section
            // state.arr = state.sectionText[0].sec
        }
    }
})