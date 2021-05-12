<template>
<!-- Slider image -->
  <div
    id="carousel"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in images"
        :key="index"
        type="button"
        data-bs-target="#carousel"
        :data-bs-slide-to="index"
        :class="index == 0 ? 'active' : ''"
        aria-current="true"
        :aria-label="item.title"
      ></button>
    </div>

    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="index == 0 ? 'active' : ''"
        data-bs-interval="10000"
        v-for="(item, index) in images"
        :key="index"
      >
        <img :src="item.image" class="d-block w-100" :alt="item.title" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.title }}</h5>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "UiCaroussel",
  data() {
    return {
      images: [
        {
          image: require("@/assets/covid.jpg"),
          title: "Image Slide 1",
          description:
            "lorem esps Some representative placeholder content for the first slide",
        },
        {
          image: require("@/assets/covid.jpg"),
          title: "Image Slide 2",
          description:
            "lorem esps Some representative placeholder content for the Second slide",
        },
      ],
    };
  },
};
</script>
<style>
#carousel,
#carousel img {
  height: 500px;
}
</style>