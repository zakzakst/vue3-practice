<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a
        class="navbar-burger"
        :class="{ 'is-active': isActiveMenu }"
        @click="onClickButton"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': isActiveMenu }">
      <div class="navbar-start">
        <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          class="navbar-item"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { GlobalNav as Constants } from '../../constants';

export default defineComponent({
  setup() {
    const state = reactive({
      items: Constants.items,
      isActiveMenu: true,
    });

    // ボタンクリック時のイベント設定
    const onClickButton = () => {
      state.isActiveMenu = !state.isActiveMenu;
    };

    return {
      ...toRefs(state),
      onClickButton,
    };
  },
});
</script>
