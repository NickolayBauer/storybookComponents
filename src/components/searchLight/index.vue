<template>
  <div>
    <div class="search_light">
      <input
        v-model="search_text"
        @keydown.enter="nextMatch()"
        @input="findMatches()"
      />
      <span v-if="matches.length > 0">
        {{ current_item }}/{{ matches.length }}
      </span>
      <button @click="prevMatch()">
        <
      </button>
      <button @click="nextMatch()">
        >
      </button>
    </div>
    <ul ref="container_scroll" class="container_scroll">
      <item-elem
        v-for="(item, index) in options"
        :key="index"
        :text="searchLightText(item)"
      ></item-elem>
    </ul>
  </div>
</template>
<script>
import itemElem from "./item-elem.vue";
import loaded_text from "./texts.json";

export default {
  components: {
    itemElem,
  },
  data() {
    return {
      search_text: "",
      current_item: 0,
      matches: [],
      options: loaded_text.texts,
    };
  },
  methods: {
    searchLightText(text) {
      return this.search_text.length > 0
        ? text.replace(
            new RegExp(this.search_text, "ig"),
            "<span class='light-text'>$&</span>"
          )
        : text;
    },
    findMatches() {
      this.$nextTick(() => {
        this.matches = this.$el.querySelectorAll(".light-text");
        if (this.matches.length > 0) {
          this.current_item = 1;
          this.scrollToMatch();
        }
      });
    },
    nextMatch() {
      if (this.matches.length == 0) return;
      this.current_item = (this.current_item % this.matches.length) + 1;
      this.scrollToMatch();
    },
    prevMatch() {
      if (this.matches.length == 0) return;
      this.current_item =
        this.current_item == 1 ? this.matches.length : this.current_item - 1;
      this.scrollToMatch();
    },
    scrollToMatch() {
      let elem = this.matches[this.current_item - 1].offsetTop;
      window.scroll(0, elem);
    },
  },
};
</script>
<style lang="scss">
.light-text {
  color: red;
  background: yellow;
}
.search_light {
  position: fixed;
  right: 50px;
  top: 50px;
}
.container_scroll {
  width: 400px;
  li {
    min-height: 50px;
    margin-bottom: 10px;
  }
}
</style>
