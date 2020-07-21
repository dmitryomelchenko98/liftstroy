<template>
  <div class="customers">
    <div class="customers-headline">
      <span>Клиенты</span>
      <div class="line"></div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Customers'
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.customers {
  @include pageContainer();
  .customers-headline {
    @include pageHeadline();
  }
}
</style>