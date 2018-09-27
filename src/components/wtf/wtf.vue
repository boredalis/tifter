<template>
  <div class="profi">
    <img class="imgjat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBI3BjW5USUK8u4_UGkDVGWaERKMC20JIhG3wWdCr9dm92kDU" alt="">
    <div class="koti">
      <div>
        <span>{{follow.username}}</span>
        <p>{{follow.user}}</p>
      </div>
      <button class="button">Follow</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["follow"],
};

</script>
<style lang="scss">
.profi {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 1px rgba(gray, .3px);
  padding: 10px 0px;
  .imgjat {
    border: solid 1px transparent;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .koti {
    display: flex;
    flex-direction: column;
    letter-spacing: 0px;
    font-weight: bold;
    color: black;
    >div {
      display: flex;
      align-items: center;
      p {
        margin: 5px;
        color: rgba(gray, .6);
        font-weight: 400;
      }
    }
  }
}
.button {
  border-radius: 20px;
  cursor: pointer;
  color: #1DA1F2;
  padding: 5px 20px;
  border: solid 1px #1DA1F2;
  font-weight: bold;
  font-size: 14px;
  background-color: white;
  max-width: max-content;
  &:focus {
    outline: none;
    border: solid 1px #55a2f3;
  }
}

</style>
