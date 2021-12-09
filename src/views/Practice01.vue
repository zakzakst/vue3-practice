<template>
  <section class="section">
    <div class="columns">
      <!-- 登録フォーム -->
      <div class="column is-half">
        <p class="is-size-3">ユーザー登録</p>
        <div class="field mt-4">
          <label class="label">ニックネーム</label>
          <div class="control">
            <input v-model="nickname" class="input" type="text" />
          </div>
        </div>
        <div class="field">
          <label class="label">メールアドレス</label>
          <div class="control">
            <input v-model="email" class="input" type="email" />
          </div>
        </div>
      </div>
      <!-- プレビュー -->
      <div class="column is-half">
        <p class="is-size-3">プレビュー</p>
        <div class="field mt-4">
          <label class="label">ニックネーム</label>
          <div class="control">
            <input :value="nickname" class="input" type="text" readonly />
          </div>
        </div>
        <div class="field">
          <label class="label">メールアドレス</label>
          <div class="control">
            <input :value="email" class="input" type="email" readonly />
          </div>
        </div>
      </div>
    </div>
    <!-- 登録ボタン -->
    <div>
      <Button text="ユーザーを登録する" color="primary" @onClick="saveUser" />
    </div>
    <hr />
    <!-- ユーザーリスト -->
    <div class="mt-4">
      <p class="is-size-3">リストをニックネームで絞り込む</p>
      <div class="field mt-4">
        <div class="control">
          <input v-model="nicknameFilter" class="input" type="email" />
        </div>
      </div>
      <table v-if="filteredUsers.length" class="table">
        <thead>
          <tr>
            <th>ニックネーム</th>
            <th>メールアドレス</th>
          </tr>
        </thead>
        <tbody>
          <UserRow
            v-for="(user, index) in filteredUsers"
            :key="index"
            :user="user"
            @onUpdate="updateUser($event, user)"
          />
        </tbody>
      </table>
    </div>
    <!-- ユーザー表示 -->
    <div class="mt-4">
      <Button
        text="ユーザーを表示する"
        color="primary"
        @onClick="displayUsers"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, ComputedRef } from 'vue';
import Button from '@/components/atoms/Button.vue';
import UserRow, { User } from '@/components/practice/UserRow.vue';

interface State {
  users: User[];
  nickname: string;
  email: string;
  nicknameFilter: string;
  filteredUsers: ComputedRef<User[]>;
}

export default defineComponent({
  components: {
    Button,
    UserRow,
  },

  setup() {
    // const users = ref<User[]>([]);
    // const state = reactive({
    //   users: [] as User[],
    //   nickname: '',
    //   email: '',
    //   nicknameFilter: '',
    //   filteredUsers: computed((): User[] => {
    //     // return users.value.filter((user) => {
    //     return state.users.filter((user) => {
    //       return user.nickname.includes(state.nicknameFilter);
    //     });
    //   }),
    // });
    const state = reactive<State>({
      users: [],
      nickname: '',
      email: '',
      nicknameFilter: '',
      filteredUsers: computed((): User[] => {
        // return users.value.filter((user) => {
        return state.users.filter((user) => {
          return user.nickname.includes(state.nicknameFilter);
        });
      }),
    });

    const saveUser = () => {
      if (!state.nickname || !state.email) return;
      // フォームの値からユーザーデータを追加
      const user = {
        nickname: state.nickname,
        email: state.email,
      };
      // users.value.push(user);
      state.users.push(user);
      // メッセージを表示
      alert(
        `ニックネーム：${state.nickname}、メールアドレス：${state.email}で登録しました。`
      );
      // フォームの初期化
      state.nickname = '';
      state.email = '';
    };

    const displayUsers = () => {
      // let message = `${users.value.length}人のユーザーが登録されています。`;
      let message = `${state.users.length}人のユーザーが登録されています。`;
      // for (const user of users.value) {
      for (const user of state.users) {
        message += `\n${user.nickname}`;
      }
      alert(message);
    };

    const updateUser = (val, user) => {
      user.nickname = val;
    };

    return {
      ...toRefs(state),
      // users,
      saveUser,
      displayUsers,
      updateUser,
    };
  },
});
</script>
