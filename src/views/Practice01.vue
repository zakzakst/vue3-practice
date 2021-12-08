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
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Button from '@/components/atoms/Button.vue';

interface User {
  nickname: string;
  email: string;
}

export default defineComponent({
  components: {
    Button,
  },

  setup() {
    const state = reactive({
      nickname: '',
      email: '',
    });
    const users = ref<User[]>([]);

    const saveUser = () => {
      if (!state.nickname || !state.email) return;
      // フォームの値からユーザーデータを追加
      const user = {
        nickname: state.nickname,
        email: state.email,
      };
      users.value.push(user);
      // メッセージを表示
      alert(
        `ニックネーム：${state.nickname}、メールアドレス：${state.email}で登録しました。`
      );
      // フォームの初期化
      state.nickname = '';
      state.email = '';
    };

    return {
      ...toRefs(state),
      users,
      saveUser,
    };
  },
});
</script>
