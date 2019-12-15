<template>
  <div class="main">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: ['content']
};
</script>

<style scoped>
.main {
  margin-left: 200px; /* Same as the width of the sidenav */
}
</style>
