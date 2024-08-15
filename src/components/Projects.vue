<template>
  <div class="container mt-5">
    <h2>My Projects</h2>
    <div class="row">
      <div class="col-md-4" v-for="project in projects" :key="project.name">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.type }}</p>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text"><strong>Technologies Used:</strong> {{ project.technologies.join(', ') }}</p>
            <a :href="project.link" class="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Projects',
  computed: {
    ...mapGetters(['getProjects']),
    projects() {
      return this.getProjects;
    }
  }
};
</script>
<style scoped>
.btn-primary {
    color: #fff;
    background-color: #ad4852;
    border-color: #721c24;
    --bs-btn-bg: #ad4852;
    --bs-btn-hover-bg: #721c24;
    --bs-btn-hover-border-color: #721c24;
}
</style>
