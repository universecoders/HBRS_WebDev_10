<template>
  <div class="main">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ["content"]
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 200px 0 200px;
}
</style>
