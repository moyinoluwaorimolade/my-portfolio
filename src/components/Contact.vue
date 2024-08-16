<template>
			<div class="container mt-5">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group mt-3">
        <label for="name">Name</label>
        <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Enter your name" required>
      </div>
      <div class="form-group mt-3">
        <label for="email">Email address</label>
        <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group mt-3">
        <label for="message">Message</label>
        <textarea v-model="form.message" class="form-control" id="message" rows="3" placeholder="Your message" required></textarea>
      </div>
      <div class="text-center mt-3 mb-3">
            <button type="submit" class="btn btn-primary">Submit</button>

      </div>
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
    async submitForm() {
      try{
// Here you would typically send the form data to a server or backend service.
      console.log('Form Submitted:', this.form);
      let response = await this.$store.dispatch('sendMessage', (this.form))
if(response == 200){
alert('Thank you for reaching out! I will get back to you soon.');
}else if(response == 500){
alert('message not forwarded, kindly use other means of communication provided')
}else if (response.error){
if (response.error instanceof TypeError && response.error.message === 'Failed to fetch') {
          alert("Connection error, kindly use other means of communication provided")
        } else {
          alert("error sending message, kindly use other means of communication provided")
        }

}


 // Reset the form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
      }catch(error){
console.log("error submitting form")
alert('something went wrong, kindly use other means of communication provided')
      }
    
   
     
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

.btn-primary {
    color: #fff;
    background-color: #ad4852;
    border-color: #721c24;
    --bs-btn-hover-bg: #721c24;
    --bs-btn-hover-border-color: #721c24;
}
</style>
