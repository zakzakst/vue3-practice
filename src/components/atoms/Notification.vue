<template>
  <div class="notification" :class="classes">
    <button class="delete" @click="onClickDelete"></button>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref } from 'vue';
import { Colors as Constants } from '../../constants';

export default defineComponent({
  props: {
    color: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.types.includes(value);
      },
    },
    light: {
      type: Boolean,
      required: false,
    },
  },

  emits: ['onClickDelete'],

  setup(props, context) {
    const state = reactive({
      colorClass: computed(() => {
        if (!props.color) return '';
        return `is-${props.color}`;
      }),
      lightClass: computed(() => {
        if (!props.light) return '';
        return `is-light`;
      }),
    });

    // クラス名配列の設定
    const classes = ref<string[]>([state.colorClass, state.lightClass]);

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
