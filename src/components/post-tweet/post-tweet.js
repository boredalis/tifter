/* ============
 * Post-tweet Component
 * ============
 *
 * todo: add documentation here!
 */

export default {
  data: () => ({
    inputValue: null,
    isActive:false,
  }),
  methods: {
    showbuttons(){
      this.isActive=true;
    },
    postTweet() {
      let twitiJem = {
        username: 'auroraselimi',
        full_name: 'Aurora',
        content: this.inputValue,
        retweets: 0,
        likes: 0,
        comments: 0,
      }
      this.$store.commit('addTweet', twitiJem);
      this.clearTweet();
    },
    clearTweet() {
      this.inputValue = null;
    },
  },
};
