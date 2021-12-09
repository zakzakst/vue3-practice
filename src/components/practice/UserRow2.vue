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
import { Options, Vue } from 'vue-class-component';

export interface User {
  nickname: string;
  email: string;
}

@Options({
  props: {
    user: Object,
  },
})
export default class UserRow2 extends Vue {
  user!: User;
  private editable = false;
  private editVal = '';

  private edit(): void {
    this.editVal = this.user.nickname;
    this.editable = true;
    this.$nextTick(() => {
      (this.$refs.editNickname as HTMLInputElement).focus();
    });
  }

  private update(): void {
    if (!this.editVal) {
      alert('ニックネームが空白です。');
      this.editClear();
      return;
    }
    this.$emit('onUpdate', this.editVal);
    this.editClear();
  }

  private editClear(): void {
    this.editable = false;
    this.editVal = '';
  }
}
</script>
