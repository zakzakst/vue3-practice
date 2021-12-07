<template>
  <div>
    <Button
      text="test"
      color="link"
      size="small"
      :full-width="false"
      :light="light"
      inverted
      rounded
      active
      @onClick="onClick"
    />
    <Button :text="text" color="success" light />
    <Tag
      text="tag test"
      color="primary"
      rounded
      light
      delete-button
      @onClick="onClick"
      @onClickDelete="onClickDelete"
      to="/"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Button from '@/components/atom/Button.vue';
import Tag from '@/components/atom/Tag.vue';

export default defineComponent({
  components: {
    Button,
    Tag,
  },
  setup() {
    const state = reactive({
      text: 'test reactive',
      light: true,
    });

    // クリック時の挙動設定
    const onClick = () => {
      console.log('click');
    };
    const onClickDelete = () => {
      console.log('delete');
    };

    return {
      ...toRefs(state),
      onClick,
      onClickDelete,
    };
  },
});
</script>
