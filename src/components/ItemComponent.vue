<template>
  <div class="item-container">
    <div>
      <span>
        {{ itemData.text }}
      </span>
      <input type="checkbox" v-model="isDone" />
    </div>
    <button @click="showMessageBox">
      <i class="far fa-trash-alt"></i>
    </button>

    <ConfirmBox
      v-if="isBoxVisible"
      @confirm-true="deleteAllItems"
      @confirm-false="hideMessageBox"
    >
      <template v-slot:title>Delete item</template>
      <template v-slot:message
        >Are you sure you want to delete this item? It's irreversible.
      </template>
    </ConfirmBox>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ConfirmBox from "@/components/ConfirmBox.vue";

export default {
  name: "ItemComponent",
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  components: {
    ConfirmBox,
  },
  data() {
    return {
      isBoxVisible: false,
    };
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
    showMessageBox() {
      this.isBoxVisible = true;
    },
    hideMessageBox() {
      this.isBoxVisible = false;
    },
    deleteItem() {
      removeItem({ item: this.itemData });
      this.hideMessageBox();
    },
  },
};
</script>

<style lang="scss" scoped>
.item-container {
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
  .item-container {
    width: auto;
  }
}
</style>