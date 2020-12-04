<template>
  <main>
    <form @submit.prevent="add">
      <input type="text" v-model="input" />
      <button>Add</button>
    </form>
    <div v-for="item in items" :key="item.text">
      <ItemComponent :item-data="item" />
    </div>
    <button @click="reset">Reset</button>
    <button @click="deleteAllItems">Delete all</button>
  </main>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";

export default {
  name: "App",
  components: {
    ItemComponent,
  },
  data() {
    return {
      input: "",
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  methods: {
    add() {
      this.$store.commit("addItem", {
        text: this.input,
      });
      this.input = "";
    },
    saveToStorage() {
      localStorage.setItem("everyday-tracker", JSON.stringify(this.items));
    },
    reset() {
      this.$store.commit("resetItems");
    },
    deleteAllItems() {
      this.$store.commit("setItems", { items: [] });
    },
  },
  mounted() {
    const storage = localStorage.getItem("everyday-tracker");
    if (storage) {
      this.$store.commit("setItems", {
        items: JSON.parse(storage),
      });
    }

    window.addEventListener("beforeunload", () => {
      this.saveToStorage();
    });
  },
};
</script>

<style lang="scss">
body {
  background-color: #1d1e1f;
  color: #e7e8f7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
