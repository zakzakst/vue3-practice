<template>
  <div class="tabs" :class="classes">
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        :class="{ 'is-active': item.active }"
      >
        <a @click="onClick(item.id, $event)">{{ item.label }}</a>
      </li>
    </ul>
  </div>
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
import { Tabs as Constants } from '../../constants';

interface Item {
  id: string;
  label: string;
  active?: boolean;
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
    size: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.sizes.includes(value);
      },
    },
    tabStyle: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.styles.includes(value);
      },
    },
    fullWidth: {
      type: Boolean,
      required: false,
    },
  },

  emits: ['onClick'],

  setup(props, context) {
    const state = reactive({
      alignmentClass: computed(() => {
        if (!props.alignment) return '';
        return `is-${props.alignment}`;
      }),
      sizeClass: computed(() => {
        if (!props.size) return '';
        return `is-${props.size}`;
      }),
      tabStyleClass: computed(() => {
        if (!props.tabStyle) return '';
        if (props.tabStyle === 'toggle-rounded') {
          return 'is-toggle is-toggle-rounded';
        } else {
          return `is-${props.tabStyle}`;
        }
      }),
      fullWidthClass: computed(() => {
        if (!props.fullWidth) return '';
        return `is-fullwidth`;
      }),
    });

    // クラス名配列の設定
    const classes = ref<string[]>([
      state.alignmentClass,
      state.sizeClass,
      state.tabStyleClass,
      state.fullWidthClass,
    ]);

    // クリック時の挙動設定
    const onClick = (id: string, e: Event) => {
      e.preventDefault();
      context.emit('onClick', id);
    };

    return {
      ...toRefs(state),
      classes,
      onClick,
    };
  },
});
</script>
