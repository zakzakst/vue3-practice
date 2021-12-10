// TODO: 名前の設定
import Progress from '../../components/atoms/Progress.vue';
import { Progress as Constants } from '../../constants';

export default {
  title: 'ATOMS/Progress',
  component: Progress,
  argTypes: {
    value: {
      control: { type: 'number' },
      options: {
        min: 0,
        max: 100,
      },
    },
    color: {
      control: { type: 'select' },
      options: Constants.colors,
    },
    size: {
      control: { type: 'select' },
      options: Constants.sizes,
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { Progress },
  setup() {
    return { args };
  },
  template: '<Progress v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  value: 50,
  color: '',
  size: '',
  indeterminate: false,
};
