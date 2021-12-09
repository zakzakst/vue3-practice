<template>
  <div>
    <!-- <Button
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
    <Pagination2
      alignment="centered"
      :max-num="7"
      :current-num="4"
      @onClick="onClickPagination"
    /> -->
    <Pagination
      alignment="centered"
      @onClick="onClickPagination"
      :data="paginationData"
      rounded
      size="large"
    />
    <Breadcrumb
      alignment="centered"
      :items="BreadcrumbItems"
      size="large"
      separator="arrow"
    />
    <Tabs
      alignment="centered"
      tab-style="toggle-rounded"
      size="large"
      full-width
      :items="tabsItems"
      @onClick="onClickTabs"
    />
    <Notification color="primary" light @onClickDelete="onClickDelete">
      <p>test</p>
    </Notification>
    <Message
      header-text="メッセージ"
      size="large"
      color="link"
      @onClickDelete="onClickDelete"
    >
      <p>test</p>
    </Message>
    <Modal :active="modalIsAcrive" @onClickClose="onClick">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
        </header>
        <section class="modal-card-body">
          <p>test</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </Modal>
    <Tags
      color="primary"
      :items="tagsItems"
      delete-button
      rounded
      light
      @onClick="onClickTags"
      @onClickDelete="onClickTagsDelete"
    />
    <Table bordered striped hover-able full-width :data="tableData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
// import Button from '@/components/atoms/Button.vue';
// import Tag from '@/components/atoms/Tag.vue';
// import Progress from '@/components/atoms/Progress.vue';
import Notification from '@/components/atoms/Notification.vue';
import Table, { Data as TableData } from '@/components/atoms/Table.vue';

import Breadcrumb, {
  Item as BreadcrumbItem,
} from '@/components/molecules/Breadcrumb.vue';
import Pagination, {
  Data as PaginationData,
} from '@/components/molecules/Pagination.vue';
// import Pagination2 from '@/components/molecules/Pagination2.vue';
import Tabs, { Item as TabsItem } from '@/components/molecules/Tabs.vue';
import Message from '@/components/molecules/Message.vue';
import Modal from '@/components/molecules/Modal.vue';
import Tags, { Item as TagsItem } from '@/components/molecules/Tags.vue';

export default defineComponent({
  components: {
    // Button,
    // Tag,
    // Progress,
    Notification,
    Table,

    Breadcrumb,
    Pagination,
    // Pagination2,
    Tabs,
    Message,
    Modal,
    Tags,
  },
  setup() {
    const state = reactive({
      text: 'test reactive',
      light: true,
      BreadcrumbItems: [
        { to: '/', label: 'Bulma' },
        { to: '/', label: 'Documentation' },
        { to: '/', label: 'Components' },
        { to: '/', label: 'Breadcrumb' },
      ] as BreadcrumbItem[],
      paginationData: {
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
      } as PaginationData,
      tabsItems: [
        { id: '1', label: 'Pictures', active: true },
        { id: '2', label: 'Music' },
        { id: '3', label: 'Videos' },
        { id: '4', label: 'Documents' },
      ] as TabsItem[],
      modalIsAcrive: false,
      tagsItems: [
        { id: '1', text: 'Pictures' },
        { id: '2', text: 'Music' },
        { id: '3', text: 'Videos', to: '/' },
      ] as TagsItem[],
      tableData: {
        head: [
          ['見出し1-1', '見出し1-2'],
          ['見出し2-1', '見出し2-2'],
        ],
        body: [
          ['test1', 'test'],
          ['test2', 'test'],
          ['test3', 'test'],
          ['test4', 'test'],
        ],
        foot: [
          ['末尾1-1', '末尾1-2'],
          ['末尾2-1', '末尾2-2'],
        ],
      } as TableData,
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
    const onClickTabs = (id: string): void => {
      console.log(id);
    };
    const onClickTags = (id: string): void => {
      console.log(id);
    };
    const onClickTagsDelete = (id: string): void => {
      console.log('delete' + id);
    };

    return {
      ...toRefs(state),
      onClick,
      onClickDelete,
      onClickPagination,
      onClickTabs,
      onClickTags,
      onClickTagsDelete,
    };
  },
});
</script>
