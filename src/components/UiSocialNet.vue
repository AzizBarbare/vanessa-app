<template>
<!-- Social network in the top page -->
  <div class="position-relative clearfix">
    <div class="position-absolute blue-bg layer-social"></div>
    <div class="social d-flex justify-content-between position-absolute py-3">
      <div class="mx-3">
        <a
          v-for="(item, index) in links"
          :key="index"
          class="link mx-2"
          :class="item.class"
          :href="item.to"
          :alt="item.alt"
          :title="item.alt"
          target="_blank"
        >
          <i class="fa" :class="item.icon"></i>
        </a>
      </div>
      <div class="mx-3">
          <i class="link mx-2 fa fa-search"></i>
          <i class="link mx-2 fa fa-user"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          class: "",
          to: "#facebook",
          alt: "facebook",
          icon: "fa-facebook",
        },
        {
          class: "",
          to: "#instagram",
          alt: "instagram",
          icon: "fa-instagram",
        },
        {
          class: "",
          to: "#youtube",
          alt: "youtube",
          icon: "fa-youtube",
        },
        {
          class: "",
          to: "tel: 0877015768",
          alt: "0877015768",
          icon: "fa-phone",
        },
        {
          class: "",
          to: "mailto: barbareaziz@gmail.com",
          alt: "barbareaziz@gmail.com",
          icon: "fa-envelope",
        },
        {
          class: "",
          to: "#",
          alt: "whatapp",
          icon: "fa-whatsapp",
        },
        {
          class: "",
          to: "",
          alt: "",
          icon: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
.layer-social{
  width: 100%;
  height: 50px;
  z-index: 97;
  opacity: 0.6;
}
.social {
  z-index: 99;
  width: 100%;
}
</style>