import { storiesOf } from "@storybook/vue";
import ieSlider from "../components/ieSlider";
import ieSliderWithTable from "../components/ieSliderWithTable";

const story = storiesOf("ieSlider", module);

story.add("ieSlider", () => ({
  template: "<ie-slider/>",
  components: { ieSlider },
}));

story.add("ieSliderWithTable", () => ({
  template: "<ie-slider-with-table/>",
  components: { ieSliderWithTable },
}));
