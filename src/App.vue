<template>
  <div id="app">
    <div id="nav">
      <Navigator />
      <body>
      <router-view/>
      </body>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigator from "./components/layout/Navigator.vue";
import Footer from "./components/layout/Footer.vue";
export default {
  name: "App",
  components: {
    Navigator,
    Footer
  },
};
</script>

<style>

</style>
