<template>
  <div class="equipment">
    <div class="equipment-headline">
      <span>Оборудование</span>
      <div class="line"></div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Equipment'
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.equipment {
  @include pageContainer();
  .equipment-headline {
    @include pageHeadline();
  }
}
</style>