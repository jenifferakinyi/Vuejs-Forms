<!-- ForgotPassword.vue -->
<template>
    <div>
      <h2>Forgot Password</h2>
      <form @submit.prevent="sendResetEmail">
        <input type="email" v-model="email" placeholder="Enter your email" required>
        <button type="submit">Send Reset Email</button>
      </form>
    </div>
  </template>
  

  