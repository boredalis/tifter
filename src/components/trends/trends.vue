<template>
  <ul class="listat">
    <li>
      <a href="">#{{trend.message}}</a>
      <p>{{trend.tweets}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["trend"],
}

</script>
<style lang="scss">
.listat {
  list-style: none;
  padding: 0;
  margin: 5px 0;
  p {
    margin: 0;
    font-weight: 300;
    font-size: 13px;
    color: rgba(gray, .9);
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: #1DA1F2;
  }
}

</style>
