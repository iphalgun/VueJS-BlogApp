import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    text: "",
    idToDisplay: 0,
    sectionText: [
      {
        idToDisplay: 1,
        section: [
          {
            sec: 1,
            data: "Redux is a predictable state container for JavaScript apps.",
          },
          {
            sec: 2,
            data:
              "Vue is a progressive framework for building user interfaces.",
          },
          {
            sec: 3,
            data:
              "As the application grows, it becomes difficult to keep it organized and maintain data flow.",
          },
          {
            sec: 4,
            data:
              "Redux solves this problem by managing application’s state with a single global object called Store.",
          },
        ],
      },
      {
        idToDisplay: 2,
        section: [
          {
            sec: 1,
            data:
              "It is flexible to go with any view layer such as React, Angular, Vue, etc.",
          },
          {
            sec: 2,
            data:
              "Vue is a progressive framework for building user interfaces.",
          },
          {
            sec: 3,
            data:
              "Vue is designed from the ground up to be incrementally adoptable.",
          },
        ],
      },
      {
        idToDisplay: 3,
        section: [
          {
            sec: 1,
            data:
              "Redux solves this problem by managing application’s state with a single global object called Store.",
          },
          {
            sec: 2,
            data:
              "It is flexible to go with any view layer such as React, Angular, Vue, etc.",
          },
        ],
      },
    ],
    arr: [],
  },
  mutations: {
    openAppId: (state, payload) => {
      state.text = payload.data;
    },
    setAppNo: (state, payload) => {
      state.idToDisplay = payload;
      let index = payload - 1;
      state.arr = state.sectionText[index].section;
      state.text = state.sectionText[index].section[0].data;
    },
  },
});
