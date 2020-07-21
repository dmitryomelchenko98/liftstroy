<template>
  <div class="header">
    <div class="header-user">
      <div class="user-foto">
        <img src="../assets/image/user.png" alt="">
      </div>
      <span>{{user.email}}.</span>
    </div>
    <router-link class="header-exit" tag="div" :to="'/login'">
      <img src="../assets/image/exit.svg" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed:{
    user(){
      return this.$store.getters.userData
    }
  }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.header {
    height: 80px;
    width: 100%;
    position: relative;
    box-shadow: 0px 5px 3px rgba(4, 4, 4, 0.1);
    @include flex();
    justify-content: space-between;
    .header-exit {
        cursor: pointer;
        margin-right: 50px;
    }
    .header-user {
      @include flex();
      margin-left: 40px;
      .user-foto {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid $colorGreyD;
        img {
          width: 100%;
          height: auto;
        }
      }
      span {
        margin-left: 15px;
        font-size: 18px;
      }
    }
}
</style>