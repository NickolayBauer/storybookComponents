<template>
  <div id="app">
    <carousel>
      <slide>
        <span class="label">
          Slide 1 Content
        </span>
      </slide>
      <slide>
        <span class="label">
          Slide 2 Content
        </span>
      </slide>
      <slide>
        <span class="label">
          Slide 3 Content
        </span>
      </slide>
      <slide>
        <span class="label">
          Slide 4 Content
        </span>
      </slide>
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  el: "#app",
  components: {
    Carousel,
    Slide,
  },
};
</script>
<style lang="scss">
.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
