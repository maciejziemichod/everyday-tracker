<template>
  <footer>
    <a
      href="https://github.com/maciejziemichod/everyday-tracker"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-github fa-lg"></i>
    </a>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  padding-top: 50px;

  a:hover {
    transform: scale(1.1);
  }

  i {
    color: var(--light);
  }
}
</style>