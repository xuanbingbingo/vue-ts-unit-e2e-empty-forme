<template>
  <div class="wrapper">
    <Nav></Nav>
    <NavMenu></NavMenu>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import NavMenu from "@/components/NavMenu.vue";
export default {
  name: "wrapper",
  components: {
    Nav,
    NavMenu
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  position: relative;
  padding-top: 50px;
  padding-left: 200px;
}
</style>
