import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";

const story = storiesOf("Simple Example", module);
story.addDecorator(withInfo);

story.add(
  "first",
  () => ({
    template: '<simple-example msg="first example"/>',
  }),
  {
    info: {},
  }
);

story.add(
  "second",
  () => ({
    template: '<simple-example msg="second example"/>',
  }),
  {
    info: {},
  }
);
