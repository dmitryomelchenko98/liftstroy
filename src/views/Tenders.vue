<template>
  <div class="tenders">
    <div class="tenders-headline">
      <span>Тендеры</span>
      <div class="line"></div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Tenders'
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.tenders {
  @include pageContainer();
  .tenders-headline {
    @include pageHeadline();
  }
}
</style>