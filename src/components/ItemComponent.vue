<template>
  <div>
    {{ itemData.text }}
    <input type="checkbox" v-model="isDone" />
    <button @click="removeItem({ item: itemData })">X</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ItemComponent",
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isDone: {
      get() {
        return this.itemData.done;
      },
      set(value) {
        this.setItemDone({ item: this.itemData, done: value });
      },
    },
  },
  methods: {
    ...mapMutations(["setItemDone", "removeItem"]),
  },
};
</script>

<style lang="scss" scoped>
</style>