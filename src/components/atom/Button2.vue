<template>
  <div>
    <button @click="onClick">{{ text }}<span>{{ subText }}</span></button>
    <p @click="onClickText">{{ text2 }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  reactive,
  toRefs,
} from "vue";

type Props = {
  text: string;
};

type State = {
  text2: string;
};

export default defineComponent({
  name: 'Button2',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup: (props: Props, context) => {
    const state: State = reactive({
      text2: 'text2',
    });

    const subText = ref<string>('sub text');

    const onClick = () => {
      console.log('click');
      subText.value = 'change text';
      context.emit('onClickTest');
    };

    const onClickText = () => {
      state.text2 = 'change text2';
    }

    onMounted(() => {
      console.log(props.text);
    });

    return {
      ...toRefs(state),
      onClick,
      onClickText,
      subText,
    };
  }
});
</script>
