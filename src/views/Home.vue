<template>
  <div id="html">
    <Menu v-bind:direction="top" v-bind:items="topMenu" v-on:changeRoute="changeMainRoute" />
    <Menu v-bind:direction="side" v-bind:items="sideMenu" v-on:load-content="loadSideContent" />
    <Content v-bind:content="content" />
    <RightBar />
  </div>
</template>

<script>
import Menu from "../components/Menu";
import RightBar from "../components/RightBar";
import Content from "../components/Content";
export default {
  name: "Html",
  components: { Menu, RightBar, Content },
  props: {
    direction: String,
    top: { type: String, default: "top" },
    side: { type: String, default: "side" },
    combinedData: Object
  },
  data() {
    return {
      topMenu: this.combinedData.combined,
      sideMenu: this.combinedData.combined[0],
      content: "👋Welcome👋 - just simple pick any link to get more information"
    };
  },
  methods: {
    changeMainRoute(route) {
      this.sideMenu = this.combinedData.combined.filter(
        item => item.main.declaration === route
      );
      this.sideMenu = this.sideMenu[0];
      this.content = this.combinedData.combined.filter(
        item => item.main.declaration === route
      );
      this.content = this.content[0].main.content;
    },
    loadSideContent(declaration, mainDeclaration, id) {
      this.content = this.combinedData.combined.filter(
        item => item.main.declaration === mainDeclaration
      );
      this.content = this.content[0].sideNav.filter(item => item.id === id);
      this.content = this.content[0].content;
    }
  }
};
</script>

<style></style>
