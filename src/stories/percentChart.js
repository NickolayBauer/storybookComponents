import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import percentChart from "../components/percentChart.vue";

const story = storiesOf("percent chart", module);
story.addDecorator(withInfo);
story.addDecorator(withKnobs);

story.add(
  "Simple pie chart",
  () => ({
    template:
      "<percent-chart :labels='labels' :percent='percent' style='width:150px;'></percent-chart>",
    components: { percentChart },
    props: {
      labels: {
        default: text("label", "label"),
      },
      percent: {
        default: number("percent", 50),
      },
    },
  }),
  {
    info: {},
  }
);
