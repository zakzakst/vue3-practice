<template>
  <div>
    <button @click="onClick">{{ text }}<span>{{ subText }}</span></button>
    <p @click="onClickText">{{ text2 }}</p>
    <p>{{ text3 }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  reactive,
  toRefs,
  computed,
  watch,
} from "vue";
import { useStore } from "vuex";

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
    const store = useStore();

    const state: State = reactive({
      text2: 'text2',
      text3: computed(() => {
        return state.text2 + 'computed';
      }),
    });

    const subText = ref<string>('sub text');

    const onClick = () => {
      console.log('click');
      subText.value = 'change text';
      context.emit('onClickTest');
    };

    const onClickText = (): void => {
      state.text2 = 'change text2';
      console.log(getText(' on click'));
    };

    const getText = (text: string): string => {
      return 'get' + text;
    };

    onMounted(() => {
      // console.log(props.text);
      console.log(store.state.test);
      // console.log(store.getters.stateTest);
      console.log(store.state.testModule.test);
      console.log(store.getters['testModule/stateTest']);
      store.commit('testModule/testMutation');
      console.log('変更後', store.state.testModule.test);
    });

    watch(subText, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    watch(subText, () => {
      console.log('sub text');
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
