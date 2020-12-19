import { createStore } from "vuex";

export default createStore({
  state: {
    items: [
      {
        text: "Task 1",
        done: true,
      },
      {
        text: "Task 2",
        done: false,
      },
    ],
    counter: 1,
  },
  mutations: {
    addItem(state, payload) {
      if (payload.text === "") return;

      let isDuplicate = false;
      state.items.forEach((elem) => {
        if (elem.text === payload.text) {
          isDuplicate = true;
        }
      });
      if (isDuplicate) return;

      state.items.push({
        text: payload.text,
        done: false,
      });
    },
    setItemDone(state, payload) {
      const index = state.items.indexOf(payload.item);
      state.items[index].done = payload.done;
    },
    removeItem(state, payload) {
      const index = state.items.indexOf(payload.item);
      state.items.splice(index, 1);
    },
    setItems(state, payload) {
      state.items = payload.items;
    },
    resetItems(state) {
      state.items = state.items.map((elem) => {
        elem.done = false;
        return elem;
      });
    },
    increaseCounter(state) {
      state.counter++;
    },
    decreaseCounter(state) {
      state.counter--;
    },
    setCounter(state, payload) {
      state.counter = payload.counter;
    },
  },
  actions: {},
  modules: {},
});
