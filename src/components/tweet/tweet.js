/* ============
 * Tweet Component
 * ============
 *
 * todo: add documentation here!
 */

export default {
  props: {
    krejt_twiti: {
      required: true,
      type: Object,
    },
  },
  data: () => ({
    likes: 0,
    retweets: 0,
    comments: 0,
  }),
  methods: {
    del_tweet() {
      this.$store.commit('deleteTweet', this.krejt_twiti);
    },
    updt_tweet(qka) {
      this[qka] = this[qka] + 1;
      // objekti.fieldName
      // objekti['fieldName'];
    },
  },
};
