<template>
    <div>
      <h1>Video.js Page</h1>
      <p>You entered: {{ input }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Videojs',
    props: {
    input: {
      type: String,
      required: true
    }
  }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>