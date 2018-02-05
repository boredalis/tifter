/* ============
 * Feed Component
 * ============
 *
 * todo: add documentation here!
 */

export default {
  mounted() {
    console.log('Feed component has been mounted!');
  },
  components:{
  	tweet: require('@/components/tweet/tweet.vue'),
  },
  computed:{
  	twitat(){
  		return  this.$store.getters.filteredTweets;
  	},
  },
};
