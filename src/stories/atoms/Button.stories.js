// TODO: Actionsの設定
// TODO: EVENTの設定
// TODO: 名前の設定
import Button from '../../components/atoms/Button.vue';
import { Button as Constants } from '../../constants';

export default {
  title: 'ATOMS/Button',
  component: Button,
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'select' },
      options: Constants.colors,
    },
    light: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: Constants.sizes,
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    outlined: {
      control: { type: 'boolean' },
    },
    inverted: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    active: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  text: 'ボタン',
  color: '',
  light: false,
  size: '',
  fullWidth: false,
  outlined: false,
  inverted: false,
  rounded: false,
  active: false,
  loading: false,
};
