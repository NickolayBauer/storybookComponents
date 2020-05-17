<template>
    <button type="button" class="simple-button" :style="{ background: buttonColor }">
        {{buttonText}}
    </button>
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "default text",
    },
    buttonColor: {
        type: String,
        default: "blue"
    }
  },
};
</script>
<style lang="scss" scoped>
.simple-button{
    border: 0px;
    color: white;
    width: 120px;
    height: 30px;
    border-radius: 20px;
    transition: .5s;
    &:hover{
        color: darken($color: white, $amount: 20);
    }
}

</style>