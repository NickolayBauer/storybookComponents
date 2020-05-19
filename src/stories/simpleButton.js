import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import simpleButton from "../components/simpleButton.vue";

const story = storiesOf("Simple Button", module);
story.addDecorator(withInfo);
story.addDecorator(withKnobs);

story.add(
  "default button",
  () => ({
    template: "<simple-button></simple-button>",
    components: { simpleButton },
  }),
  {
    info: {},
  }
);

story.add(
  "red button",
  () => ({
    template:
      '<simple-button @click="action" :button-text="buttonText" button-color="red"></simple-button>',
    components: { simpleButton },
    props: {
      buttonText: {
        default: text("text", "default text"),
      },
    },
    methods: {
      action: action("clicked!"),
    },
  }),
  {
    info: {},
  }
);
