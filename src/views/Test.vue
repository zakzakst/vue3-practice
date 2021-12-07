<template>
  <div>
    <Button
      text="test"
      color="link"
      size="small"
      :full-width="false"
      :light="light"
      inverted
      rounded
      active
      @onClick="onClick"
    />
    <Button :text="text" color="success" light />
    <Tag text="tag test" color="primary" rounded light to="/" />
    <Tag
      text="tag test"
      color="primary"
      rounded
      light
      delete-button
      @onClick="onClick"
      @onClickDelete="onClickDelete"
    />
    <Progress :value="10" color="primary" size="large" :indeterminate="false" />
    <Breadcrumb
      alignment="centered"
      :items="items"
      size="large"
      separator="arrow"
    />
    <Pagination
      alignment="centered"
      @onClick="onClickPagination"
      :items="paginationItems"
      rounded
      size="large"
    />
    <Pagination2
      alignment="centered"
      :max-num="7"
      :current-num="4"
      @onClick="onClickPagination"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Button from '@/components/atoms/Button.vue';
import Tag from '@/components/atoms/Tag.vue';
import Progress from '@/components/atoms/Progress.vue';

import Breadcrumb from '@/components/molecules/Breadcrumb.vue';
import Pagination from '@/components/molecules/Pagination.vue';
import Pagination2 from '@/components/molecules/Pagination2.vue';

export default defineComponent({
  components: {
    Button,
    Tag,
    Progress,
    Breadcrumb,
    Pagination,
    Pagination2,
  },
  setup() {
    const state = reactive({
      text: 'test reactive',
      light: true,
      items: [
        { to: '/', label: 'Bulma' },
        { to: '/', label: 'Documentation' },
        { to: '/', label: 'Components' },
        { to: '/', label: 'Breadcrumb' },
      ],
      paginationItems: {
        startItems: [
          {
            key: '1',
            label: '1',
            current: false,
          },
          {
            key: '2',
            label: '2',
            current: false,
          },
        ],
        centerItems: [
          {
            key: '5',
            label: '5',
            current: false,
          },
          {
            key: '6',
            label: '6',
            current: true,
          },
          {
            key: '7',
            label: '7',
            current: false,
          },
        ],
        endItems: [
          {
            key: '11',
            label: '11',
            current: false,
          },
          {
            key: '12',
            label: '12',
            current: false,
          },
        ],
      },
    });

    // クリック時の挙動設定
    const onClick = () => {
      console.log('click');
    };
    const onClickDelete = () => {
      console.log('delete');
    };
    const onClickPagination = (key: string) => {
      console.log(key);
    };

    return {
      ...toRefs(state),
      onClick,
      onClickDelete,
      onClickPagination,
    };
  },
});
</script>
