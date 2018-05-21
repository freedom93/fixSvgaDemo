<template>
  <div class="app">
    <Rose/>
  </div>
</template>

<script>
import Rose from './rose.vue';

export default {
  name: 'app',
  components: {
    Rose,
  },
};
</script>

<style lang="scss">
@import "~css/index.scss";
</style>
