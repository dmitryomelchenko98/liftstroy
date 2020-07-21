<template>
  <div class="contract">
    <div class="contract-headline">
      <span>Договора</span>
      <div class="line"></div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Contract'
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.contract {
  @include pageContainer();
  .contract-headline {
    @include pageHeadline();
  }
}
</style>