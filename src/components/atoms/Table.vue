<template>
  <table class="table" :class="classes">
    <thead>
      <tr v-for="(items, n) in data.head" :key="n">
        <th v-for="(item, m) in items" :key="m">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(items, n) in data.body" :key="n">
        <td v-for="(item, m) in items" :key="m">{{ item }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr v-for="(items, n) in data.foot" :key="n">
        <th v-for="(item, m) in items" :key="m">{{ item }}</th>
      </tr>
    </tfoot>
  </table>
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

export interface Data {
  head?: string[][];
  body: string[][];
  foot?: string[][];
}

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Data>,
      required: true,
    },
    bordered: {
      type: Boolean,
      required: false,
    },
    striped: {
      type: Boolean,
      required: false,
    },
    narrow: {
      type: Boolean,
      required: false,
    },
    hoverAble: {
      type: Boolean,
      required: false,
    },
    fullWidth: {
      type: Boolean,
      required: false,
    },
  },

  setup(props) {
    const state = reactive({
      borderedClass: computed(() => {
        if (!props.bordered) return '';
        return `is-bordered`;
      }),
      stripedClass: computed(() => {
        if (!props.striped) return '';
        return `is-striped`;
      }),
      narrowClass: computed(() => {
        if (!props.narrow) return '';
        return `is-narrow`;
      }),
      hoverAbleClass: computed(() => {
        if (!props.hoverAble) return '';
        return `is-hoverable`;
      }),
      fullWidthClass: computed(() => {
        if (!props.fullWidth) return '';
        return `is-fullwidth`;
      }),
    });

    // クラス名配列の設定
    const classes = ref<string[]>([
      state.borderedClass,
      state.stripedClass,
      state.narrowClass,
      state.hoverAbleClass,
      state.fullWidthClass,
    ]);

    return {
      ...toRefs(state),
      classes,
    };
  },
});
</script>
