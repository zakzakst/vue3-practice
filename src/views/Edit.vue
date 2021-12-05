<template>
  <div>
    <div class="input-container">
      <user-row />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import userRowComponent, { User } from '@/components/UserRow.vue';

export default defineComponent({
  components: {
    'user-row': userRowComponent,
  },
  setup() {
    const state = reactive({
      users: [],
      nickname: '',
      email: '',
      nicknameFilter: '',
      filteredUsers: computed(() => {
        return state.users.filter((user) => {
          return user.nickname.includes(state.nicknameFilter);
        });
      }),
    });

    /**
     * ユーザー登録
     */
    const saveUser = () => {
      const user = new User(state.nickname, state.email);
      state.users.push(user);
      // ダイアログを表示
      alert(
        `ニックネーム：${state.nickname}、メールアドレス：${state.email}で登録しました。`
      );
    };

    /**
     * ユーザー表示
     */
    const displayUsers = () => {
      let message = `${state.users.length}人のユーザーが登録されています。`;
      for (const user of state.users) {
        message += '\n' + user.nickname;
      }
      alert(message);
    };

    return {
      saveUser,
      displayUsers,
      state,
    };
  },
});
</script>
