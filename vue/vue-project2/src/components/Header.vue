<template>
  <h1>{{ nama }}</h1>
  <button @click="changeText">change text</button>
</template>

<script>
export default {
  name: "Header",
  props: ["nama"],
  data() {
    return {
      newText: "ini adalah text dari header.vue",
    };
  },
  methods: {
    changeText() {
      this.$emit("changeTitle", this.newText);
    },
  },
  emits: ["changeTitle"],
};
</script>

<style></style>
