<template>
  <span>
    <button
      @click="showConfirmBox"
      title="This button will uncheck all the items."
    >
      <i class="fas fa-history"></i>
    </button>

    <ConfirmBox
      v-if="isBoxVisible"
      @confirm-true="resetItems"
      @confirm-false="hideConfirmBox"
    >
      <template v-slot:title>Reset items</template>
      <template v-slot:message
        >Are you sure you want to reset all items?
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
      isBoxVisible: false,
    };
  },
  methods: {
    hideConfirmBox() {
      this.isBoxVisible = false;
    },
    showConfirmBox() {
      this.isBoxVisible = true;
    },
    resetItems() {
      this.$store.commit("resetItems");
      this.hideConfirmBox();
    },
  },
};
</script>