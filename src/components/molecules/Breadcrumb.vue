<template>
  <nav class="breadcrumb" :class="classes">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'is-active': items.length === index + 1 }"
      >
        <router-link :to="item.to">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  toRefs,
  ref,
  PropType,
} from 'vue';
import { Breadcrumb as Constants } from '../../constants';

export interface Item {
  to: string;
  label: string;
}

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Item[]>,
      required: true,
      validator: (value: Item[]) => {
        return Boolean(value.length);
      },
    },
    alignment: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.alignment.includes(value);
      },
    },
    separator: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.separators.includes(value);
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

  setup(props) {
    const state = reactive({
      alignmentClass: computed(() => {
        if (!props.alignment) return '';
        return `is-${props.alignment}`;
      }),
      separatorClass: computed(() => {
        if (!props.separator) return '';
        return `has-${props.separator}-separator`;
      }),
      sizeClass: computed(() => {
        if (!props.size) return '';
        return `is-${props.size}`;
      }),
    });

    // クラス名配列の設定
    const classes = ref<string[]>([
      state.alignmentClass,
      state.separatorClass,
      state.sizeClass,
    ]);

    return {
      ...toRefs(state),
      classes,
    };
  },
});
</script>
