<template>
  <nav class="pagination" :class="classes">
    <a class="pagination-previous" @click="onClick('prev', $event)">Prev</a>
    <a class="pagination-next" @click="onClick('next', $event)">Next</a>
    <ul class="pagination-list">
      <!-- 先頭部分 -->
      <template v-if="isShowStartNums">
        <li>
          <a class="pagination-link" @click="onClick(String(1), $event)">1</a>
        </li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
      </template>
      <!-- 中央部分 -->
      <template v-if="nums.length">
        <li v-for="num in nums" :key="num">
          <a
            class="pagination-link"
            :class="{ 'is-current': num === currentNum }"
            @click="onClick(String(num), $event)"
          >
            {{ num }}</a
          >
        </li>
      </template>
      <!-- 末尾部分 -->
      <template v-if="isShowEndNums">
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li>
          <a class="pagination-link" @click="onClick(String(maxNum), $event)">{{
            maxNum
          }}</a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref } from 'vue';
import { Pagination as Constants } from '../../constants';

export default defineComponent({
  props: {
    maxNum: {
      type: Number,
      required: true,
      validator: (value: number) => {
        // 自然数であるか判定
        return value > 0 && Number.isInteger(value);
      },
    },
    currentNum: {
      type: Number,
      required: true,
      validator: (value: number) => {
        // 自然数であるか判定
        return value > 0 && Number.isInteger(value);
      },
    },
    alignment: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.alignment.includes(value);
      },
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: false,
      validator: (value: string) => {
        return Constants.sizes.includes(value);
      },
    },
  },

  emits: ['onClick'],

  setup(props, context) {
    const state = reactive({
      alignmentClass: computed((): string => {
        if (!props.alignment) return '';
        return `is-${props.alignment}`;
      }),
      roundedClass: computed((): string => {
        if (!props.rounded) return '';
        return `is-rounded`;
      }),
      sizeClass: computed((): string => {
        if (!props.size) return '';
        return `is-${props.size}`;
      }),
      nums: computed((): number[] => {
        const result: number[] = [];
        if (props.maxNum <= 3) {
          // 要素数が3以下の場合
          for (let i = 0; i < props.maxNum; i++) {
            result.push(i + 1);
          }
        } else if (props.currentNum <= 3) {
          // 現在の数が先頭3以下の場合
          result.push(1, 2, 3);
        } else if (props.currentNum >= props.maxNum - 2) {
          // 現在の数が末尾3以下の場合
          result.push(props.maxNum - 2, props.maxNum - 1, props.maxNum);
        } else {
          result.push(
            props.currentNum - 1,
            props.currentNum,
            props.currentNum + 1
          );
        }
        return result;
      }),
      isShowStartNums: computed((): boolean => {
        let result = false;
        if (props.maxNum <= 3) {
          // 要素数が3以下の場合
        } else if (props.currentNum <= 3) {
          // 現在の数が先頭3以下の場合
        } else if (props.currentNum >= props.maxNum - 2) {
          // 現在の数が末尾3以下の場合
          result = true;
        } else {
          result = true;
        }
        return result;
      }),
      isShowEndNums: computed((): boolean => {
        let result = false;
        if (props.maxNum <= 3) {
          // 要素数が3以下の場合
        } else if (props.currentNum <= 3) {
          // 現在の数が先頭3以下の場合
          result = true;
        } else if (props.currentNum >= props.maxNum - 2) {
          // 現在の数が末尾3以下の場合
        } else {
          result = true;
        }
        return result;
      }),
    });

    // クラス名配列の設定
    const classes = ref<string[]>([
      state.alignmentClass,
      state.roundedClass,
      state.sizeClass,
    ]);

    // クリック時の挙動設定
    const onClick = (key: string, e: Event) => {
      e.preventDefault();
      context.emit('onClick', key);
    };

    return {
      ...toRefs(state),
      classes,
      onClick,
    };
  },
});
</script>
