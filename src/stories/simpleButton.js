import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import simpleButton from '../components/simpleButton.vue'

const story = storiesOf("Simple Button", module);
story.addDecorator(withInfo);

story.add(
  "default button",
  () => ({
    template: '<simple-button></simple-button>',
    components: { simpleButton }
  }),
  {
    info: {},
  }
);

story.add(
  "red button",
  () => ({
    template: '<simple-button button-color="red" button-text="custom text"></simple-button>',
    components: { simpleButton }
  }),
  {
    info: {},
  }
);
