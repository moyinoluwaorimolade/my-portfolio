<template>
   <!-- Header -->
        <header class="py-5">
          <div class="container px-5 pb-5">
            <div class="row gx-5 align-items-center">
              <div class="col-xxl-5">
                <!-- Header text content -->
                <div class="text-center text-xxl-start">
                  <div class="badge bg-gradient-primary-to-secondary text-white mb-4">
                    <span class="text-uppercase">Backend &middot; Frontend &middot; Database-Administration</span>
                  </div>
                  <p class="fs-3 fw-light text-muted">Welcome to My Portfolio!</p>
                  <div class="display-3 fw-bold mb-5">
                    <span class="text-gradient d-inline">Explore my projects and learn more about my work.</span>
                  </div><br>
                  <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                    <router-link class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to="/resume">Resume</router-link>
                    <router-link class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to="/projects">Projects</router-link>
                  </div>
                </div>
              </div>
              <div class="col-xxl-7">
                <!-- Header profile picture -->
                <div class="d-flex justify-content-center mt-5 mt-xxl-0">
                  <div class="profile bg-gradient-primary-to-secondary">
                    <img class="profile-img" src="../assets/wineDressPic.jpg" alt="..." />
                   <!-- <div class="dots-1">
                      <svg-dots-component />
                    </div>
                    <div class="dots-2">
                      <svg-dots-component />
                    </div>
                    <div class="dots-3">
                      <svg-dots-component />
                    </div>
                    <div class="dots-4">
                      <svg-dots-component />
                    </div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- About Section -->
        <section class="bg-light py-5" style="background-color:rgb(253 241 242 / 56%);">
          <div class="container px-5">
            <div class="row gx-5 justify-content-center">
              <div class="col-xxl-8">
                <div class="text-center my-5">
                  <h2 class="display-5 fw-bolder">
                    <span class="text-gradient d-inline">About Me</span>
                  </h2>
                  <p class="lead fw-light mb-4">
                    I'm a software developer specializing in Java, Vue.js, JavaScript, and Bootstrap.
                  </p>
                  <p class="text-muted">
                    A dedicated and self-motivated Agricultural Economics graduate with a First Class degree, who transitioned into the field of software development driven by a strong passion for technology. Currently employed at Sichersoft, where I consistently demonstrate a commitment to professional growth and excellence in the tech industry.
                  </p>
                  <div class="d-flex justify-content-center fs-2 gap-4">
                   <!--<a class="text-gradient" href="#!">
                      <i class="bi bi-twitter"></i>
                    </a> --> 
                    
                    <a class="text-gradient" href="www.linkedin.com/in/orimolade-moyinoluwa-18915a210" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-linkedin"></i>
                    </a>
                    <a class="text-gradient" href="https://bitbucket.org/moyinoluwaorimolade/workspace/"
  target="_blank"
  rel="noopener noreferrer"
>
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
</template>

<script>
//import Footer from './Footer.vue';
//import Navbar from './Navbar.vue';

export default {
  components: {
   // Footer,
//Navbar
  }
};
</script>

<style scoped>
/* Add your styles here */
.btn-primary {
    color: #fff;
    background-color: #ad4852;
    border-color: rgb(253 241 242 / 56%);;
    --bs-btn-hover-bg: rgb(253 241 242 / 56%);;
    --bs-btn-hover-border-color: #721c24;
        --bs-btn-active-bg: #ad4852;
        --bs-btn-hover-color: #721c24;
}

a {
    color: #ad4852;
}


</style>
