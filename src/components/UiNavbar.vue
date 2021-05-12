<template>
<!-- navbar page -->
  <div class="navbar position-absolute py-5">
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <!-- Logo page -->
    <a class="navbar-brand" href="#">
                  <img
            :src="require('@/assets/logo.png')"
            alt="logo"
            class="d-inline-block logo"
          />

    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  d-flex justify-content-end" id="navbarScroll">
      <ul class="navbar-nav my-2 navbar-nav-scroll">
        <!-- link navigator -->
        <li class="nav-item"  v-for="(item, index) in links" :key="index">
            <router-link  class="nav-link text-uppercase fw-bold" :to="`/${item.to}`">{{item.label}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>
<script>
export default {
  name:  'UiNavbar',
    data(){
        return {
            links:[
                {to: '', label: 'Home'},
                {to: 'about', label: 'About'},
                {to: 'contact', label: 'Contact'},
            ]
        }
    }
};
</script>
<style scoped>
.navbar{
  z-index: 98;
  width: 100%;
}
.logo{
    width: 250px;
    height: auto;
}
</style>