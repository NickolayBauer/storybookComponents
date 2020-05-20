import { configure } from "@storybook/vue";

function loadStories() {
    require('../src/stories/simpleExample.js'),
    require('../src/stories/simpleButton.js'),
    require('../src/stories/percentChart.js')
}

configure(loadStories, module)