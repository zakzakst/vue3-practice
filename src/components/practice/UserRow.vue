<template>
  <tr>
    <td>
      <input
        v-if="editable"
        v-model="editVal"
        ref="editNickname"
        @blur="update"
        type="text"
      />
      <span v-else @click="edit">{{ user.nickname }}</span>
    </td>
    <td>{{ user.email }}</td>
  </tr>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  nextTick,
  PropType,
  toRefs,
} from 'vue';

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
  setup(props, context) {
    const state = reactive({
      editable: false,
      editVal: '',
    });
    const editNickname = ref<HTMLInputElement | null>(null);

    const edit = () => {
      state.editVal = props.user.nickname;
      state.editable = true;
      nextTick(() => {
        editNickname.value?.focus();
      });
    };

    const update = () => {
      if (!state.editVal) {
        alert('ニックネームが空白です。');
        editClear();
        return;
      }
      context.emit('onUpdate', state.editVal);
      editClear();
    };

    const editClear = () => {
      state.editable = false;
      state.editVal = '';
    };

    return {
      ...toRefs(state),
      editNickname,
      edit,
      update,
    };
  },
});
</script>
