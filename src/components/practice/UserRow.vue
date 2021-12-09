<template>
  <tr>
    <td>
      <span>{{ user.nickname }}</span>
      <!-- <input
        v-show="editable"
        ref="editNickname"
        v-bind="inputVal"
        @blur="editable = false"
        type="text"
      /> -->
    </td>
    <td>{{ user.email }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, PropType } from 'vue';

export interface User {
  nickname: string;
  email: string;
}

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  // setup() {
  //   // リアクティブデータの設定
  //   const editable = ref(false);
  //   // TODO: 「ref(null)」でDOMの参照ができるはずだが、上手くいかない
  //   const editNickname = ref(null);

  //   const edit = () => {
  //     editable.value = true;
  //     nextTick(() => {
  //       // editNickname.value.focus();
  //     });
  //   };

  //   return {
  //     editable,
  //     editNickname,
  //     edit,
  //   };
  // },
});
</script>
