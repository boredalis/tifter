/* ============
 * Vuex Store
 * ============
 *
 * The store of the application
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
export const strict = false

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    tweets: [],
    userSearch: null,
  },
  mutations: {
    addTweets(state, tweets) {
      console.log('tweets dashjkdas', tweets);
      state.tweets = tweets;
    },

    addTweet(state, var_hyrse) {
      state.tweets.push(var_hyrse);
    },
    deleteTweet(state, kontenti_hyrs) {
      let a = state.tweets.indexOf(kontenti_hyrs);
      state.tweets.splice(a, 1);
    },
    updateTweet(state, objekti) {
      // shkrujna kodin me ba update
    },
    updateUserSearch(state, payload) {
      state.userSearch = payload;
    },
  },
  actions: {
    getFeed({ commit }) {
      Vue.$http.get('http://192.168.0.198:4500/api/getFeed').then((res) => {
        let tweetsFromServer = res.data;
        commit('addTweets', tweetsFromServer);
      }).catch((err) => {
        console.log('Sorry, some error happened', err);
      });
    },
  },
  getters: {
    filteredTweets: (state) => {
      if(state.userSearch !== null && state.userSearch.length > 0) {
        let filteredTweets = state.tweets.filter(tweet => {
          return tweet.content.toLowerCase().includes(state.userSearch.toLowerCase());
        });
        return filteredTweets;
      }
      return state.tweets;
    }
  },

  /**
   * Assign the modules to the store
   */
  modules: {},

  /**
   * If strict mode should be enabled
   */
  strict: debug,

  /**
   * Plugins used in the store
   */
  plugins: debug ? [createLogger()] : [],
});
