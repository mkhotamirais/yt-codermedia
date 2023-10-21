<template>
  <h2>Nama: {{ nama }}</h2>
  <button @click="changeName">change name</button>
  <a :href="url">google</a>
  <br />
  <input type="text" v-model="inpNama" />
  <p>{{ inpNama }}</p>
  <div v-if="products.length">
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.title }} - {{ product.price }}</li>
    </ul>
  </div>
  <div v-else>
    <p>No data found</p>
  </div>
  <input type="text" v-model="cari" placeholder="cari" />
  <div v-if="productsCari.length">
    <ul>
      <li v-for="product in cariData" :key="product.id">{{ product.title }} - {{ product.price }}</li>
    </ul>
  </div>
  <div v-else>
    <p>No data found</p>
  </div>
  <MyHeader @changeTitle="ubahText" text="ini adalah text dari app.vue" :textData="textData" />
</template>

<script>
import MyHeader from "@/components/Komponen1.vue";
export default {
  name: "App",
  components: {
    MyHeader,
  },
  data() {
    return {
      nama: "Ahmad",
      url: "https://google.com",
      inpNama: "",
      products: [
        { id: 1, title: "product 1", price: 1000 },
        { id: 2, title: "product 2", price: 2000 },
        { id: 3, title: "product 3", price: 3000 },
        { id: 4, title: "product 4", price: 4000 },
        { id: 5, title: "product 5", price: 5000 },
      ],
      cari: "ahmad",
      productsCari: [],
      textData: "ini adalah text dari data",
    };
  },
  methods: {
    changeName() {
      this.nama = "joko";
    },
    ubahText(newText) {
      this.text = newText;
    },
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    this.productsCari = [
      { id: 1, title: "productCari 1", price: 1000 },
      { id: 2, title: "productCari 2", price: 2000 },
      { id: 3, title: "productCari 3", price: 3000 },
      { id: 4, title: "productCari 4", price: 4000 },
      { id: 5, title: "productCari 5", price: 5000 },
    ];
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  computed: {
    cariData() {
      return this.products.filter((item) => {
        return item.title.match(this.cari);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
