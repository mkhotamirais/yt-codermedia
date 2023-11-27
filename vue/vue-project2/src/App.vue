<template>
  <Header @changeTitle="ubahText" :nama="nama" />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      nama: "ahmad abdul",
    };
  },
  methods: {
    ubahText(newText) {
      this.nama = newText;
    },
  },
};
</script>

<style></style>
