<template>
  <progress
    class="progress"
    :class="classes"
    :value="indeterminate ? null : value"
    max="100"
  >
    {{ value }}%
  </progress>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref } from 'vue';
import { Progress as Constants } from '../../constants';

export default defineComponent({
  props: {
    value: {
      type: Number,
      default: null,
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
    indeterminate: {
      type: Boolean,
      required: false,
    },
  },

  setup(props) {
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

    return {
      ...toRefs(state),
      classes,
    };
  },
});
</script>
