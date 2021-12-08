<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background" @click="onClickClose"></div>
    <button class="modal-close is-large" @click="onClickClose"></button>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['onClickClose'],

  setup(props, context) {
    // 閉じるボタンクリック時の挙動設定
    const onClickClose = () => {
      context.emit('onClickClose');
    };

    return {
      onClickClose,
    };
  },
});
</script>
