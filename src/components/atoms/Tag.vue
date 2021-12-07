<template>
  <!-- toが設定されている場合、router-linkタグを利用 -->
  <router-link v-if="to" :to="to" class="tag" :class="classes">{{
    text
  }}</router-link>
  <!-- hrefが設定されていない場合、spanタグを利用 -->
  <span v-else class="tag" :class="classes" @click="onClick">
    {{ text }}
    <button
      v-if="deleteButton"
      ref="deleteButtonEl"
      class="delete is-small"
      @click="onClickDelete"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref } from 'vue';
import { Tag as Constants } from '../../constants';

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
        return Constants.colors.includes(value);
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
        return Constants.sizes.includes(value);
      },
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    deleteButton: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: false,
    },
  },

  emits: ['onClick', 'onClickDelete'],

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
      roundedClass: computed(() => {
        if (!props.rounded) return '';
        return `is-rounded`;
      }),
    });

    // クラス名配列の設定
    const classes = ref<string[]>([
      state.colorClass,
      state.lightClass,
      state.sizeClass,
      state.roundedClass,
    ]);

    // 削除ボタン要素の設定
    const deleteButtonEl = ref(null);

    // クリック時の挙動設定
    const onClick = (e: Event) => {
      // クリック要素が削除ボタンの場合、処理を終了
      if (e.target === deleteButtonEl.value) return;
      context.emit('onClick');
    };

    // 削除ボタンクリック時の挙動設定
    const onClickDelete = () => {
      context.emit('onClickDelete');
    };

    return {
      ...toRefs(state),
      classes,
      deleteButtonEl,
      onClick,
      onClickDelete,
    };
  },
});
</script>
