<template>
  <div class="tags">
    <Tag
      v-for="item in items"
      :key="item.id"
      :text="item.text"
      :color="color"
      :rounded="rounded"
      :light="rounded"
      :delete-button="deleteButton"
      :to="item.to"
      @onClick="onClick(item.id)"
      @onClickDelete="onClickDelete(item.id)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Tag as Constants } from '../../constants';
import Tag from '@/components/atoms/Tag.vue';

export interface Item {
  id: string;
  text: string;
  to?: string;
}

export default defineComponent({
  components: {
    Tag,
  },

  props: {
    items: {
      type: Array as PropType<Item[]>,
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
  },

  emits: ['onClick', 'onClickDelete'],

  setup(props, context) {
    // クリック時の挙動設定
    const onClick = (id: string) => {
      context.emit('onClick', id);
    };

    // 削除ボタンクリック時の挙動設定
    const onClickDelete = (id: string) => {
      context.emit('onClickDelete', id);
    };

    return {
      onClick,
      onClickDelete,
    };
  },
});
</script>
