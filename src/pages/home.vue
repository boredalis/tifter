<style lang="scss" src="./home.scss"></style>
<template src="./home.html"></template>
<script>
  export default {
  	components: {
  		topBar: require('@/components/top-bar/top-bar.vue'),
  		postTweet: require('@/components/post-tweet/post-tweet.vue'),
  		profili: require('@/components/profili/profili.vue'),
  		wtf: require('@/components/wtf/wtf.vue'),
      feed: require('@/components/feed/feed.vue'),
      phonetweet: require('@/components/phonetweet/phonetweet.vue'),
      trends: require('@/components/trends/trends.vue'),
  	},
    mounted() {
      this.$store.dispatch('getFeed');
      if(this.noTweets) {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 4000);
      }
    },
  	computed: {
  		twitat() {
  			return this.$store.state.tweets;
  		},
      emri_cool() {
        return this.emri + 'Selimi';
      },
      noTweets() {
        if(this.twitat.length > 0) {
          return false;
        }
        return true;
      }
  	},
    data: () => ({
      isActive:true,
      tweetntelefon:false,
      parenti:true,
      postbutton:true,
      overlay: false,
      showAlert: false,
      trends:[{message:"BT21", tweets: "1,111 Tweets"},{message:"BT21", tweets: "1,111 Tweets"}],
      suggestions:[{username:"Some Guy", user:"sm_guy"},{username:"Some Girl", user:"sm_guy"}],
    }),
    methods: {
      writetweet(){
        this.showAlert = false;
        this.tweetntelefon=true;
        this.parenti=false;
        this.postbutton=false;
      },
      hideTweetModal() {
        this.tweetntelefon = false;
        this.parenti = true;
        this.postbutton=true;
      },
    },
  };
</script>
