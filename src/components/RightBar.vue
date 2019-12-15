<template>
  <div class="rightnav">This is the right Bar</div>
</template>

<script>
export default {
  name: "RightBar"
};
</script>

<style scoped>
.rightnav {
  height: 100%;
  width: 200px;
  margin-top: 48px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 80%;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}
.rightnav a {
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
</style>