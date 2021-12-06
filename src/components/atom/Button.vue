<template>
  <button class="button" :class="classes" @click="onClick">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref } from 'vue';
import { ButtonColors, ButtonSizes } from '../../constants';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      validator: (value: string) => {
        return ButtonColors.includes(value);
      },
    },
    light: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: false,
      validator: (value: string) => {
        return ButtonSizes.includes(value);
      },
    },
    fullWidth: {
      type: Boolean,
      required: false,
    },
    outlined: {
      type: Boolean,
      required: false,
    },
    inverted: {
      type: Boolean,
      required: false,
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    active: {
      type: Boolean,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
    },
  },

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
      sizeClass: computed(() => {
        if (!props.size) return '';
        return `is-${props.size}`;
      }),
      fullWidthClass: computed(() => {
        if (!props.fullWidth) return '';
        return `is-fullwidth`;
      }),
      outlinedClass: computed(() => {
        if (!props.outlined) return '';
        return `is-outlined`;
      }),
      invertedClass: computed(() => {
        if (!props.inverted) return '';
        return `is-inverted`;
      }),
      roundedClass: computed(() => {
        if (!props.rounded) return '';
        return `is-rounded`;
      }),
      activeClass: computed(() => {
        if (!props.active) return '';
        return `is-active`;
      }),
      loadingClass: computed(() => {
        if (!props.loading) return '';
        return `is-loading`;
      }),
    });

    // クラス名配列の設定
    const classes = ref([
      state.colorClass,
      state.lightClass,
      state.sizeClass,
      state.fullWidthClass,
      state.outlinedClass,
      state.invertedClass,
      state.roundedClass,
      state.activeClass,
      state.loadingClass,
    ]);

    // クリック時の挙動設定
    const onClick = () => {
      context.emit('onClick');
    };

    return {
      ...toRefs(state),
      classes,
      onClick,
    };
  },
});
</script>
