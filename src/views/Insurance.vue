<template>
  <div class="insurance">
    <div class="insurance-headline">
      <span>Страхование</span>
      <div class="line"></div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Insurance'
}

</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.insurance {
  @include pageContainer();
  .insurance-headline {
    @include pageHeadline();
  }
}
</style>