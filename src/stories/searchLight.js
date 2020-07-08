import { storiesOf } from "@storybook/vue";
import searchLight from "../components/searchLight/index.vue";

const story = storiesOf("Search with light", module);

story.add("Search with light", () => ({
  template: "<search-light/>",
  components: { searchLight },
}));
