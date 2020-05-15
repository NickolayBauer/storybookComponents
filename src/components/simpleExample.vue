<template>
  <div>
    <p v-text="msg"></p>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>
