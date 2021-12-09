<template>
  <tr>
    <td>
      <input
        v-if="editable"
        ref="editNickname"
        @blur="editable = false"
        type="text"
      />
      <span v-else @click="edit">{{ user.nickname }}</span>
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
  setup() {
    const editable = ref(false);
    const editNickname = ref<HTMLInputElement>();

    const edit = () => {
      editable.value = true;
      nextTick(() => {
        editNickname.value?.focus();
      });
    };

    return {
      editable,
      editNickname,
      edit,
    };
  },
});
</script>
