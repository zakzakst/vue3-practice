<template>
  <div>
    <Button text="test" color="primary" :light="light" />
    <Button :text="text" light />
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

    return {
      ...toRefs(state),
    };
  },
});
</script>
