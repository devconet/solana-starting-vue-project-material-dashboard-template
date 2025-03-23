<!--
=========================================================
* Vue Material Dashboard 2 - v3.1.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-material-dashboard-2
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<template>
<sidenav
    :custom_class="color"
    :class="[isRTL ? 'fixed-end' : 'fixed-start']"
    v-if="showSidenav"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden"
  >
    <!-- nav -->
    <navbar
      :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
      :color="isAbsolute ? 'text-white opacity-8' : ''"
      :minNav="navbarMinimize"
      v-if="showNavbar"
    />
    <router-view />
    <app-footer v-show="showFooter" />
    <configurator
      :toggle="toggleConfigurator"
      :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
    />
  </main>
</template>
<script>
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import Sidenav from "./examples/Sidenav/index.vue";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";

// Access Vuex store
const store = useStore();

// Computed properties (Replacing mapState)
const isRTL = computed(() => store.state.isRTL);
const color = computed(() => store.state.color);
const isAbsolute = computed(() => store.state.isAbsolute);
const isNavFixed = computed(() => store.state.isNavFixed);
const navbarFixed = computed(() => store.state.navbarFixed);
const absolute = computed(() => store.state.absolute);
const showSidenav = computed(() => store.state.showSidenav);
const showNavbar = computed(() => store.state.showNavbar);
const showFooter = computed(() => store.state.showFooter);
const showConfig = computed(() => store.state.showConfig);
const hideConfigButton = computed(() => store.state.hideConfigButton);

// Methods (Replacing mapMutations)
const toggleConfigurator = () => store.commit("toggleConfigurator");
const navbarMinimize = () => store.commit("navbarMinimize");

// Lifecycle hook (Replacing beforeMount)
onBeforeMount(() => {
  store.state.isTransparent = "bg-transparent";

  const sidenav = document.getElementsByClassName("g-sidenav-show")[0];
  if (sidenav && window.innerWidth > 1200) {
    sidenav.classList.add("g-sidenav-pinned");
  }
});
</script>
