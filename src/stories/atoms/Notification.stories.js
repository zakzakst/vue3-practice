// TODO: Actionsの設定
// TODO: EVENTの設定
// TODO: SLOTSの設定
// TODO: 名前の設定
import Notification from '../../components/atoms/Notification.vue';
import { Colors as Constants } from '../../constants';

export default {
  title: 'ATOMS/Notification',
  component: Notification,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: Constants.types,
    },
    light: {
      control: { type: 'boolean' },
    },
    slot: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => ({
  components: { Notification },
  setup() {
    return { args };
  },
  template: '<Notification v-bind="args">{{ args.slot }}</Notification>',
});

export const Default = Template.bind({});

Default.args = {
  color: '',
  light: false,
  slot: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
};
