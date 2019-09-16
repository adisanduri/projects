import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    inboxMessages: {
      1: {
        id: 1,
        title: 'Hi',
        sent: new Date().getTime(),
        from: 'Adi',
        content: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
        favourite: false,
      },
      2: {
        id: 2,
        title: 'Hello',
        sent: new Date().getTime() - 1000000,
        from: 'Dana',
        content: 'no no no',
        favourite: false,
      },
      3: {
        id: 3,
        title: 'what\'s up?',
        sent: new Date().getTime() - 10000000,
        from: 'Neta',
        content: 'Hello nir? how are you today?',
        favourite: false,
      },
      4: {
        id: 4,
        title: 'music',
        sent: new Date().getTime() - 100000000,
        from: 'Ben-El',
        content: 'Hello nir? how are you today?',
        favourite: false,
      },
      5: {
        id: 5,
        title: 'hiiiii',
        sent: new Date().getTime() - 1000000000,
        from: 'Shimi',
        content: 'Hello nir? how are you today?',
        favourite: false,
      },
      6: {
        id: 6,
        title: 'Hello Adi',
        sent: new Date().getTime() - 10000000000,
        from: 'Yana',
        content: 'Hello Yana? how are you today?',
        favourite: true,
      },
    },
    outboxMessages: [],
    trashboxMessages: [],
    selectedMessage: undefined,
    selectedOption: undefined,
  },
  getters: {
  },
  actions: {
    toggleFavourite({ commit }, id) {
      commit('toggleFavourite', id);
    },
  },
  mutations: {
    setSelectedMessage(state, value) {
      state.selectedMessage = value;
    },
    setSelectedOption(state, value) {
      state.selectedOption = value;
    },
    addItemToList(state, { listName, message }) {
      state[listName].push(message);
    },
    removeItemByIdFromList(state, { listName, message }) {
      const list = state[listName];
      list.splice(list.findIndex(i => i.id === message.id), 1);
    },
    toggleFavourite(state, id) {
      state.inboxMessages[id].favourite = !state.inboxMessages[id].favourite;
    },
  },
});
