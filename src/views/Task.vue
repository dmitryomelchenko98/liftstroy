<template>
  <div class="task">
    <div class="task-headline">
      <span>Задачи</span>
      <div class="line"></div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Task'
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.task {
  @include pageContainer();
  .task-headline {
    @include pageHeadline();
  }
}
</style>