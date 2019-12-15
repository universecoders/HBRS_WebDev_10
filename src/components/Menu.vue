<template>
  <div>
    <div v-if="topNav" class="topnav">
      <span
        v-for="item in items"
        :key="item.id"
        v-on:click="$emit('changeRoute', item.main.declaration)"
      >
        <router-link
          :to="{ name: 'chunk', params: { chunk: item.main.link } }"
          >{{ item.main.declaration }}</router-link
        ></span
      >
    </div>
    <div v-if="sideNav" class="sidenav">
      <span
        v-for="item in items.sideNav"
        :key="item.id"
        v-on:click="
          $emit(
            'load-content',
            item.declaration,
            items.main.declaration,
            item.id
          )
        "
      >
        <router-link
          :to="{
            name: 'side',
            params: { chunk: items.main.link, side: item.link }
          }"
          >{{ item.declaration }}</router-link
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['direction', 'items'],
  data() {
    if (this.direction === 'top') {
      return {
        sideNav: false,
        topNav: true
      };
    } else {
      return {
        sideNav: true,
        topNav: false
      };
    }
  }
};
</script>

<style scoped>
/* The sidenav */
.sidenav {
  height: 100%;
  width: 200px;
  margin-top: 48px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}
.sidenav a {
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
.sidenav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4caf50;
  color: white;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
