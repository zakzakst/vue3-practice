// TODO: 名前の設定
// TODO: router-linkの書き出し
import Breadcrumb from '../../components/molecules/Breadcrumb.vue';
import { Breadcrumb as Constants } from '../../constants';

export default {
  title: 'MOLECULES/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: Constants.alignment,
    },
    separator: {
      control: { type: 'select' },
      options: Constants.separators,
    },
    size: {
      control: { type: 'select' },
      options: Constants.sizes,
    },
  },
};

const Template = (args) => ({
  components: { Breadcrumb },
  setup() {
    return { args };
  },
  template: '<Breadcrumb v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  items: [
    { to: '/', label: 'Bulma' },
    { to: '/', label: 'Documentation' },
    { to: '/', label: 'Components' },
    { to: '/', label: 'Breadcrumb' },
  ],
  alignment: '',
  separator: '',
  size: '',
};
