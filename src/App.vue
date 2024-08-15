<template>
  <div lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Personal - Start Bootstrap Theme</title>
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      <!-- Include external CSS -->
      <link rel="stylesheet" href="path/to/your/css/file.css" />
    </head>
    <body class="d-flex flex-column h-100" style="background-color:hwb(354.64deg 65.1% 12.94% / 56%);">
      <main class="flex-shrink-0">
        <!-- Navigation -->
        <Navbar />
<router-view></router-view>
      
             </main>

      <!-- Footer -->
      <Footer />

      <!-- Include external scripts 
      <script src="path/to/your/script.js"></script>-->
      
    </body>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Footer,
Navbar
  }
};
</script>

<style scoped>
/* Add your styles here */
a {
    color: #ad4852;
    //text-decoration: underline;
}
</style>


