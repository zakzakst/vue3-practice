// TODO: Actionsの設定
// TODO: EVENTの設定
// TODO: 名前の設定
import Tag from '../../components/atoms/Tag.vue';
import { Tag as Constants } from '../../constants';

export default {
  title: 'ATOMS/Tag',
  component: Tag,
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
    rounded: {
      control: { type: 'boolean' },
    },
    deleteButton: {
      control: { type: 'boolean' },
    },
    to: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => ({
  components: { Tag },
  setup() {
    return { args };
  },
  template: '<Tag v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  text: 'タグ',
  color: '',
  light: false,
  size: '',
  rounded: false,
  deleteButton: false,
  to: '',
};
