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
    <Progress :value="10" color="primary" size="large" :indeterminate="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Button from '@/components/atom/Button.vue';
import Tag from '@/components/atom/Tag.vue';
import Progress from '@/components/atom/Progress.vue';

export default defineComponent({
  components: {
    Button,
    Tag,
    Progress,
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
