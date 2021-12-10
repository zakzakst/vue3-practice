// TODO: 名前の設定
// TODO: propsがオブジェクトや配列の場合の設定あるか調べる
import Table from '../../components/atoms/Table.vue';

export default {
  title: 'ATOMS/Table',
  component: Table,
  argTypes: {
    bordered: {
      control: { type: 'boolean' },
    },
    striped: {
      control: { type: 'boolean' },
    },
    narrow: {
      control: { type: 'boolean' },
    },
    hoverAble: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { Table },
  setup() {
    return { args };
  },
  template: '<Table v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  data: {
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
  },
  bordered: false,
  striped: false,
  narrow: false,
  hoverAble: false,
  fullWidth: false,
};
