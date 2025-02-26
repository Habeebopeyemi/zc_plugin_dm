import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pickEmoji: false,
        showReply: false,
        emojis: [],
        emojiSet: Object.create(null),
    },
    mutations: {
        setPickEmoji(state, payload) {
            state.pickEmoji = payload;
        },
        setShowReply(state, payload) {
            state.showReply = payload;
        },
        setEmojis(state, payload) {
            state.emojis = payload;
        },
        setEmojiSet(state, payload) {
            state.emojiSet = payload;
        },
    },
    actions: {
        setEmojis({ commit, state }, payload) {
            const emojis = [...state.emojis, payload];
            commit('setEmojis', emojis);
            const map = emojis.reduce(
                (prev, next) => ({
                    ...prev,
                    [next]: (prev[next] || 0) + 1,
                }),
                {}
            );
            commit('setEmojiSet', map);
        },
    },
    getters: {
        pickEmoji(state) {
            return state.pickEmoji;
        },
        showReply(state) {
            return state.showReply;
        },
        emojis(state) {
            return state.emojis;
        },
        emojiSet(state) {
            return state.emojiSet;
        },
    },
    modules: {},
});
