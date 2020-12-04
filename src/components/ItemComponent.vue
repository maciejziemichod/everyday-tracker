<template>
  <div>
    <div>
      <span>
        {{ itemData.text }}
      </span>
      <input type="checkbox" v-model="isDone" />
    </div>
    <button @click="removeItem({ item: itemData })">
      <i class="far fa-trash-alt"></i>
    </button>
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
div {
  width: 400px;
  padding: 3px 0;
  display: flex;
  align-items: center;
}
input[type="checkbox"] {
  transform: scale(1.4);
  margin: 0 30px 0 15px;
}

@media (max-width: 400px) {
  div {
    width: auto;
  }
}
</style>