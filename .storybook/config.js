import { configure } from "@storybook/vue";

function loadStories() {
    require('../src/stories/simpleExample.js'),
    require('../src/stories/simpleButton.js'),
    require('../src/stories/percentChart.js'),
    require('../src/stories/contactUsForm.js'),
    require('../src/stories/searchLight.js')
    require('../src/stories/ieSlider.js')
}

configure(loadStories, module)