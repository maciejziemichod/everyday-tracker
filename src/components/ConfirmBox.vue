<template>
  <div class="box">
    <div class="header">
      <p>
        <slot name="title"></slot>
      </p>
    </div>
    <div class="body">
      <div>
        <slot name="message"></slot>
      </div>
      <div class="buttons">
        <button @click="confirmTrue">Yes</button>
        <button @click="confirmFalse">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmBox",
  emits: ["confirm-true", "confirm-false"],
  methods: {
    confirmTrue() {
      this.$emit("confirm-true");
    },
    confirmFalse() {
      this.$emit("confirm-false");
    },
  },
};
</script>

<style scoped>
.box {
  background-color: #b60000;
  width: 500px;
  position: fixed;
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1000;
  padding: 0 20px 20px;
  border-radius: 5px;
  text-align: center;
  -webkit-box-shadow: 5px 5px 21px 0px rgba(0, 0, 0, 0.9);
  box-shadow: 5px 5px 21px 0px rgba(0, 0, 0, 0.9);
}

.header {
  text-align: center;
  padding-bottom: 10px;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
}

button {
  width: 50px;
}

@media (max-width: 550px) {
  .box {
    width: 90%;
  }
}
</style>