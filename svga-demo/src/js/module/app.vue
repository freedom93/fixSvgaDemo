<template>
  <div class="app">
    <Angel/>
    <Rose/>
  </div>
</template>

<script>
import Angel from '../component/angel.vue';
import Rose from '../component/rose.vue';

export default {
  name: 'app',
  components: {
    Angel, Rose,
  },
};
</script>

<style lang="scss">
@import "~css/index.scss";
</style>
