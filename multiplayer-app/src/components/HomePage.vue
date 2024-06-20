<template>
    <div>
      <h1>Home Page</h1>
      <form @submit.prevent="handleSubmit">
        <input v-model="userInput" placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import ROUTES from '@/routes/routes'

  export default {
    name: 'HomePage',
    data() {
      return {
        userInput: ''
      };
    },
    methods: {
      handleSubmit() {
        this.$router.push({ name: ROUTES.Videojs.name, params: { input: this.userInput } });
      }
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>