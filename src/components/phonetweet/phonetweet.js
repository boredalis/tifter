/* ============
 * Phonetweet Component
 * ============
 *
 * todo: add documentation here!
 */

export default {
  data: () => ({
    inputvalue: null,

  }),
  methods: {
    hiqetweetin() {
      this.$emit('closeTweetModal');
    },
    sendtweet() {
      let twitiJem = {
        username: 'auroraselimi',
        full_name: 'Aurora',
        content: this.inputvalue,
        retweets: 0,
        likes: 0,
        comments: 0,
      };
      this.$store.commit('addTweet', twitiJem);
      this.hiqetweetin();
    },
  },
  mounted() {
    console.log('Phonetweet component has been mounted!');
  },
};
