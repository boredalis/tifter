/* ============
 * Top-bar Component
 * ============
 *
 * todo: add documentation here!
 */

export default {
  mounted() {
    console.log('Top-bar component has been mounted!');
  },
  data: () => ({
  	user_search: null,
  }),
  methods: {
  	shtoNjo() {
  		this.$store.commit('addTweet', 'Kontenti qishtu qysh po du un');
  	},
  	updateUserSearchInStore() {
  		this.$store.commit('updateUserSearch', this.user_search);
  	},
  },
};
