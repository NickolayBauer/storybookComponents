import { configure } from "@storybook/vue";

function loadStories() {
    require('../src/stories/simpleExample.js'),
    require('../src/stories/simpleButton.js'),
    require('../src/stories/percentChart.js'),
    require('../src/stories/contactUsForm.js'),
    require('../src/stories/searchLight.js')
}

configure(loadStories, module)