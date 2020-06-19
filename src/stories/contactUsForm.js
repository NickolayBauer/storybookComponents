import { storiesOf } from "@storybook/vue";
import contactUsForm from "../components/forms/contactUsForm";

const story = storiesOf("Contact us form", module);

story.add("Contact us form", () => ({
  template: "<contact-us-form/>",
  components: { contactUsForm },
}));
