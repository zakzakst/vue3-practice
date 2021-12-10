// TODO: Actionsの設定
// TODO: EVENTの設定
// TODO: 名前の設定
import Tabs from '../../components/molecules/Tabs.vue';
import { Tabs as Constants } from '../../constants';

export default {
  title: 'MOLECULES/Tabs',
  component: Tabs,
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: Constants.alignment,
    },
    size: {
      control: { type: 'select' },
      options: Constants.sizes,
    },
    tabStyle: {
      control: { type: 'select' },
      options: Constants.styles,
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  components: { Tabs },
  setup() {
    return { args };
  },
  template: '<Tabs v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  items: [
    { id: '1', label: 'Pictures', active: true },
    { id: '2', label: 'Music' },
    { id: '3', label: 'Videos' },
    { id: '4', label: 'Documents' },
  ],
  alignment: '',
  size: '',
  tabStyle: '',
  fullWidth: false,
};
