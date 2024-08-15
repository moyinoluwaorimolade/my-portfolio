<template>
			<div class="container mt-5">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="form.message" class="form-control" id="message" rows="3" placeholder="Your message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to a server or backend service.
      console.log('Form Submitted:', this.form);
      alert('Thank you for reaching out! I will get back to you soon.');
      
      // Reset the form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
