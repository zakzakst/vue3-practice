<template>
  <GlobalNav />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GlobalNav from '@/components/organisms/GlobalNav.vue';

export default defineComponent({
  components: {
    GlobalNav,
  },
});
</script>

<style lang="scss">
// この記述が無いとbulmaのスタイルが上手く反映されなかったため記載
// TODO: 原因を調べる
</style>
