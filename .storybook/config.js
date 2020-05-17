import { configure } from "@storybook/vue";

function loadStories() {
    require('../src/stories/simpleExample.js'),
    require('../src/stories/simpleButton.js')
}

configure(loadStories, module)