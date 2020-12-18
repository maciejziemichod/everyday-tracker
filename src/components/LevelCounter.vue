<template>
  <div class="level-counter">
    <div>lvl</div>
    <div>
      <button @click="decreaseLevel"><i class="fas fa-minus"></i></button>
      <span>{{ level }}</span>
      <button @click="increaseLevel"><i class="fas fa-plus"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LevelCounter",
  data() {
    return {
      level: 1,
    };
  },
  methods: {
    decreaseLevel() {
      if (this.level > 1) {
        this.level--;
      }
    },
    increaseLevel() {
      this.level++;
    },
    saveToStorage() {
      localStorage.setItem("everyday-tracker-level", this.level);
    },
  },
  mounted() {
    const storage = localStorage.getItem("everyday-tracker-level");
    if (storage) {
      this.level = parseInt(storage);
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