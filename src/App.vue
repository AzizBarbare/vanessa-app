<template>
  <!-- Main & template page  -->
  <div id="app" class="position-relative">
    <div class="position-relative clearfix">
      <div class="position-absolute blue-bg layer"></div>
      <ui-social-net />
      <ui-navbar />
    </div>
    <ui-caroussel />
    <div class="viewer">
      <router-view></router-view>
    </div>
    <ui-footer />
  </div>
</template>

<script>
import UiSocialNet from "./components/UiSocialNet";
import UiCaroussel from "./components/UiCaroussel";
import UiNavbar from "./components/UiNavbar";
import UiFooter from "./components/UiFooter.vue";

export default {
  name: "App",
  components: {
    UiSocialNet,
    UiNavbar,
    UiCaroussel,
    UiFooter,
  },
};
</script>

<style scoped>
.layer{
  width: 100%;
  height: 140px;
  z-index: 97;
  opacity: 0.3;
}
.viewer {
  min-height: 200px;
}
</style>
