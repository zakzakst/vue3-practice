<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    text: String,
  },
  mounted(): void {
    console.log('button mounted');
  },
})

export default class Button extends Vue {
  text!: string
}
</script>
