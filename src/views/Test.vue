<template>
  <div>
    <Button text="test" />
    <Button :text="text" />
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
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
