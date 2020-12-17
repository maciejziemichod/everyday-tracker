<template>
  <span>
    <button
      @click="showConfirmBox"
      title="WARNING! This button will delete all the items."
    >
      <i class="far fa-trash-alt"></i> <i class="far fa-trash-alt"></i>
    </button>

    <ConfirmBox
      v-if="confirmBoxVisible"
      @confirm-true="deleteAllItems"
      @confirm-false="hideConfirmBox"
    >
      <template v-slot:title>Delete items</template>
      <template v-slot:message
        >Are you sure you want to delete all items? It's irreversible. Clearing
        local storage will erase the data as well.
      </template>
    </ConfirmBox>
  </span>
</template>

<script>
import ConfirmBox from "@/components/ConfirmBox.vue";

export default {
  name: "DeleteAllItemsButton",
  components: {
    ConfirmBox,
  },
  data() {
    return {
      confirmBoxVisible: false,
    };
  },
  methods: {
    hideConfirmBox() {
      this.confirmBoxVisible = false;
    },
    showConfirmBox() {
      this.confirmBoxVisible = true;
    },
    deleteAllItems() {
      this.$store.commit("setItems", { items: [] });
      this.hideConfirmBox();
    },
  },
};
</script>

<style scoped>
</style>