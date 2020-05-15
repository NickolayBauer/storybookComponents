import { configure } from "@storybook/vue";
import Vue from 'vue'
import simpleExample from '../src/components/simpleExample.vue'
Vue.component('simple-example', simpleExample)
function loadStories() {
    require('../src/stories/simpleExample.js')
}

configure(loadStories, module)