// TODO: Actionsの設定
// TODO: EVENTの設定
// TODO: 名前の設定
import Pagination2 from '../../components/molecules/Pagination2.vue';
import { Pagination as Constants } from '../../constants';

export default {
  title: 'MOLECULES/Pagination2',
  component: Pagination2,
  argTypes: {
    maxNum: {
      control: { type: 'number' },
      options: {
        min: 1,
        step: 1,
      },
    },
    currentNum: {
      control: { type: 'number' },
      options: {
        min: 1,
      },
    },
    alignment: {
      control: { type: 'select' },
      options: Constants.alignment,
    },
    rounded: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: Constants.sizes,
    },
  },
};

const Template = (args) => ({
  components: { Pagination2 },
  setup() {
    return { args };
  },
  template: '<Pagination2 v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  maxNum: 10,
  currentNum: 5,
  alignment: '',
  rounded: false,
  size: '',
};
