<style lang="scss" src="./home.scss"></style>
<template src="./home.html"></template>
<script>
  export default {
  	components: {
  		topBar: require('@/components/top-bar/top-bar.vue'),
  		postTweet: require('@/components/post-tweet/post-tweet.vue'),
  		profili: require('@/components/profili/profili.vue'),
  		wtf: require('@/components/wtf/wtf.vue'),
      feed: require('@/components/feed/feed.vue')
  	},
    mounted() {
      this.$store.dispatch('getFeed');
    },
  	computed: {
  		twitat() {
  			return this.$store.state.tweets;
  		},
      emri_cool() {
        return this.emri + 'Selimi';
      },
  	},
    data: () => ({
      emri: 'Altin',
      isActive:true,
    }),
    methods: {
      
    },
  };
</script>
