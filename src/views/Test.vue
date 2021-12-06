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
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Button from '@/components/atom/Button.vue';

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const state = reactive({
      text: 'test reactive',
      light: true,
    });

    // クリック時の挙動設定
    const onClick = () => {
      console.log('test');
    };

    return {
      ...toRefs(state),
      onClick,
    };
  },
});
</script>
