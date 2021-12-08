<template>
  <article class="message" :class="classes">
    <div v-if="headerText" class="message-header">
      <p>{{ headerText }}</p>
      <button class="delete" @click="onClickDelete"></button>
    </div>
    <div class="message-body">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref } from 'vue';
import { Message as Constants } from '../../constants';

export default defineComponent({
  props: {
    headerText: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.colors.includes(value);
      },
    },
    size: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.sizes.includes(value);
      },
    },
  },

  emits: ['onClickDelete'],

  setup(props, context) {
    const state = reactive({
      colorClass: computed(() => {
        if (!props.color) return '';
        return `is-${props.color}`;
      }),
      sizeClass: computed(() => {
        if (!props.size) return '';
        return `is-${props.size}`;
      }),
    });

    // クラス名配列の設定
    const classes = ref<string[]>([state.colorClass, state.sizeClass]);

    // 削除ボタンクリック時の挙動設定
    const onClickDelete = () => {
      context.emit('onClickDelete');
    };

    return {
      ...toRefs(state),
      classes,
      onClickDelete,
    };
  },
});
</script>
