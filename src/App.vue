<template>
  <main>
    <div class="container">
      <div class="container">
        <form @submit.prevent="add">
          <input type="text" v-model="input" class="text-input" />
          <button>Add</button>
        </form>
      </div>
      <section>
        <template v-for="item in items" :key="item.text">
          <ItemComponent :item-data="item" />
        </template>
      </section>
      <div class="container buttons">
        <button @click="reset"><i class="fas fa-history"></i></button>
        <button @click="deleteAllItems">
          <i class="far fa-trash-alt"></i> <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
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

.container {
  width: fit-content;
  margin: 0 auto;
}

form {
  padding-top: 50px;
}

section {
  padding: 50px 0;
}

form {
  width: 400px;
  display: flex;
  justify-content: space-between;
}

.text-input {
  width: 320px;
  padding: 5px;
}

button {
  padding: 5px 12px;
}

.buttons > button:first-of-type {
  margin-right: 15px;
}
</style>
