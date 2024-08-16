<template>
  <footer class="bg-white py-4 mt-auto">
    <div class="container px-5">
      <div class="row align-items-center justify-content-between flex-column flex-sm-row">
        <div class="col-auto">
          <small class="m-0">Copyright &copy; Hannah Moyinoluwa Orimolade 2024</small>
        </div>
        <div class="col-auto">
          <router-link class="small" to="/privacy">Privacy</router-link>
          <span class="mx-1">&middot;</span>
          <!--<a class="small" href="#!">Terms</a>
          <span class="mx-1">&middot;</span>-->
          <router-link class="small" to="/mycontact">Contact</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
/* Add any component-specific styles here */
a {
    color: #ad4852;
    //text-decoration: underline;
}
</style>
