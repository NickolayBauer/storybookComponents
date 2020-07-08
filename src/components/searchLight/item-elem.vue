<template>
  <li v-html="text"></li>
</template>
<script>
export default {
  props: ["text"],
};
</script>
