<template>
  <h2>Hello World</h2>
  <p>{{ text }}</p>
  <p>{{ textData }}</p>
  <button @click="changeText">ubah text</button>
</template>

<script>
export default {
  name: "MyHeader",
  props: ["text", "textData"],
  data() {
    return {
      newText: "ini adalah text dari komponen1.vue",
    };
  },
  methods: {
    changeText() {
      this.$emit("changeTitle", this.newText);
    },
  },
};
</script>

<style scoped></style>
