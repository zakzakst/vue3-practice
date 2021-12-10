// TODO: Actionsの設定
// TODO: EVENTの設定
// TODO: SLOTSの設定
// TODO: 名前の設定
import Modal from '../../components/molecules/Modal.vue';

export default {
  title: 'MOLECULES/Modal',
  component: Modal,
  argTypes: {
    active: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { Modal },
  setup() {
    return { args };
  },
  template: '<Modal v-bind="args">{{ args.slot }}</Modal>',
});

export const Default = Template.bind({});

Default.args = {
  active: true,
  // TODO: HTML要素の挿入方法が分からない
  slot: '<p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>',
};
