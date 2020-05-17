import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import simpleExample from '../components/simpleExample.vue'

const story = storiesOf("Simple Example", module);
story.addDecorator(withInfo);

story.add(
  "first",
  () => ({
    template: '<simple-example msg="first example"/>',
    components: { simpleExample }
  }),
  {
    info: {},
  }
);

story.add(
  "second",
  () => ({
    template: '<simple-example msg="second example"/>',
    components: { simpleExample }
  }),
  {
    info: {},
  }
);
