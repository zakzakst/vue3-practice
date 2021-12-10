// TODO: Actionsの設定
// TODO: EVENTの設定
// TODO: SLOTSの設定
// TODO: 名前の設定
import Message from '../../components/molecules/Message.vue';
import { Message as Constants } from '../../constants';

export default {
  title: 'MOLECULES/Message',
  component: Message,
  argTypes: {
    headerText: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'select' },
      options: Constants.colors,
    },
    size: {
      control: { type: 'select' },
      options: Constants.sizes,
    },
  },
};

const Template = (args) => ({
  components: { Message },
  setup() {
    return { args };
  },
  template: '<Message v-bind="args">{{ args.slot }}</Message>',
});

export const Default = Template.bind({});

Default.args = {
  headerText: '見出し',
  color: '',
  size: '',
  slot: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
};
