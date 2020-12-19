<template>
  <div class="level-counter">
    <div>lvl</div>
    <div>
      <button @click="decreaseCounter"><i class="fas fa-minus"></i></button>
      <span>{{ counter }}</span>
      <button @click="increaseCounter"><i class="fas fa-plus"></i></button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "LevelCounter",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    ...mapMutations(["increaseCounter", "decreaseCounter", "setCounter"]),
    saveToStorage() {
      localStorage.setItem("everyday-tracker-level", this.counter);
    },
  },
  mounted() {
    const storage = localStorage.getItem("everyday-tracker-level");
    if (storage) {
      this.setCounter({ counter: parseInt(storage) });
    }

    window.addEventListener("beforeunload", () => {
      this.saveToStorage();
    });
  },
};
</script>

<style scoped>
.level-counter {
  width: max-content;
  margin: 0 auto;
  text-align: center;
}
button {
  border: none;
}
span {
  padding: 0 5px;
}
</style>