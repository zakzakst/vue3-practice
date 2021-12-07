<template>
  <nav class="pagination" :class="classes">
    <a class="pagination-previous" @click="onClick('prev', $event)">Prev</a>
    <a class="pagination-next" @click="onClick('next', $event)">Next</a>
    <ul class="pagination-list">
      <!-- 先頭部分 -->
      <template v-if="items.startItems.length">
        <li v-for="item in items.startItems" :key="item.key">
          <a
            class="pagination-link"
            :class="{ 'is-current': item.current }"
            @click="onClick(item.key, $event)"
          >
            {{ item.label }}</a
          >
        </li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
      </template>
      <!-- 中央部分 -->
      <template v-if="items.centerItems.length">
        <li v-for="item in items.centerItems" :key="item.key">
          <a
            class="pagination-link"
            :class="{ 'is-current': item.current }"
            @click="onClick(item.key, $event)"
          >
            {{ item.label }}</a
          >
        </li>
      </template>
      <!-- 末尾部分 -->
      <template v-if="items.endItems.length">
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li v-for="item in items.endItems" :key="item.key">
          <a
            class="pagination-link"
            :class="{ 'is-current': item.current }"
            @click="onClick(item.key, $event)"
          >
            {{ item.label }}</a
          >
        </li>
      </template>
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
import { Pagination as Constants } from '../../constants';

interface Item {
  key: string;
  label: string;
  current: boolean;
}

interface PaginationItem {
  startItems: Item[];
  centerItems: Item[];
  endItems: Item[];
}

export default defineComponent({
  props: {
    items: {
      type: Object as PropType<PaginationItem>,
      required: true,
    },
    alignment: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.alignment.includes(value);
      },
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.sizes.includes(value);
      },
    },
  },

  emits: ['onClick'],

  setup(props, context) {
    const state = reactive({
      alignmentClass: computed(() => {
        if (!props.alignment) return '';
        return `is-${props.alignment}`;
      }),
      roundedClass: computed(() => {
        if (!props.rounded) return '';
        return `is-rounded`;
      }),
      sizeClass: computed(() => {
        if (!props.size) return '';
        return `is-${props.size}`;
      }),
    });

    // クラス名配列の設定
    const classes = ref<string[]>([
      state.alignmentClass,
      state.roundedClass,
      state.sizeClass,
    ]);

    // クリック時の挙動設定
    const onClick = (key: string, e: Event) => {
      e.preventDefault();
      context.emit('onClick', key);
    };

    return {
      ...toRefs(state),
      classes,
      onClick,
    };
  },
});
</script>
