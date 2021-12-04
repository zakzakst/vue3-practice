<template>
  <tr>
    <td>
      <span>{{ user.nickname }}</span>
      <input
        v-show="editable"
        ref="editNickname"
        v-bind="inputVal"
        @blur="editable = false"
        type="text"
      />
    </td>
    <td>{{ user.email }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue';

export function User(nickname: string, email: string): void {
  this.nickname = nickname;
  this.email = email;
}

// type User = {
//   nickname: string;
//   email: string;
// }

export default defineComponent({
  props: {
    user: {
      // TODO: 型の指定が上手くいかない
      // type: User,
      required: true,
    },
  },
  setup() {
    // リアクティブデータの設定
    const editable = ref(false);
    // TODO: 「ref(null)」でDOMの参照ができるはずだが、上手くいかない
    const editNickname = ref(null);

    const edit = () => {
      editable.value = true;
      nextTick(() => {
        // editNickname.value.focus();
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

<!--
<template>
  <tr>
    <td>
      <span>{{ user.nickname }}</span>
      <input
        v-show="editable"
        ref="editNickname"
        v-bind="inputVal"
        @blur="editable = false"
        type="text"
      />
    </td>
    <td>{{ user.email }}</td>
  </tr>
</template>

<script lang="js">
import Vue from "vue";

export function User(nickname: string, email: string): void {
  this.nickname = nickname;
  this.email = email;
}

export default Vue.extend({
  props: {
    user: {
      type: User,
      required: true,
    },
  },
  data() {
    return {
      inputVal: '',
      editable: false,
    };
  },
  methods: {
    edit() {
      this.editable = true;
      this.$nextTick(() => {
        // DOM更新後に実行
        this.$refs.editNickname.focus();
      });
    },
  },
  watch: {
    inputVal(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.$emit('input', newVal);
    },
  },
});
</script>

<style module>
td input {
  width: 95%;
}
</style>
-->
