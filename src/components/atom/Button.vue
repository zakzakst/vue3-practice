<template>
  <button class="button" :class="classes">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      // TODO: 入力制限の方法調べる
      type: String,
      required: false,
    },
    light: {
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
      lightClass: computed(() => {
        if (!props.light) return '';
        return `is-light`;
      }),
    });

    const classes = ref([state.colorClass, state.lightClass]);

    return {
      ...toRefs(state),
      classes,
    };
  },
});
</script>
