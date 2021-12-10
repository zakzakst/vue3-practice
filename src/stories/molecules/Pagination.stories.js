// TODO: Actionsの設定
// TODO: EVENTの設定
// TODO: 名前の設定
import Pagination from '../../components/molecules/Pagination.vue';
import { Pagination as Constants } from '../../constants';

export default {
  title: 'MOLECULES/Pagination',
  component: Pagination,
  argTypes: {
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
  components: { Pagination },
  setup() {
    return { args };
  },
  template: '<Pagination v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  data: {
    startItems: [
      {
        key: '1',
        label: '1',
        current: false,
      },
      {
        key: '2',
        label: '2',
        current: false,
      },
    ],
    centerItems: [
      {
        key: '5',
        label: '5',
        current: false,
      },
      {
        key: '6',
        label: '6',
        current: true,
      },
      {
        key: '7',
        label: '7',
        current: false,
      },
    ],
    endItems: [
      {
        key: '11',
        label: '11',
        current: false,
      },
      {
        key: '12',
        label: '12',
        current: false,
      },
    ],
  },
  alignment: '',
  rounded: false,
  size: '',
};
