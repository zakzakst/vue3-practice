// TODO: Actionsの設定
// TODO: EVENTの設定
// TODO: 名前の設定
// TODO: Tagコンポーネントのエイリアス「@/」がstorybook側で読み込めなかった、対応方法調べる（※一旦Tagの@を相対パスに変更して対応した）
import Tags from '../../components/molecules/Tags.vue';
import { Tag as Constants } from '../../constants';

export default {
  title: 'MOLECULES/Tags',
  component: Tags,
  argTypes: {
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
  },
};

const Template = (args) => ({
  components: { Tags },
  setup() {
    return { args };
  },
  template: '<Tags v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  items: [
    { id: '1', text: 'Pictures' },
    { id: '2', text: 'Music' },
    { id: '3', text: 'Videos', to: '/' },
  ],
  color: '',
  light: false,
  size: '',
  rounded: false,
  deleteButton: false,
};
