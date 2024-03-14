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

<script>
export default {
    data() {
        return {
            email: ''
        };
    },methods: {
  async sendResetEmail() {
    try {
      await fetch('http://localhost:7000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: this.email })
      });
      // Redirect or show a message indicating email sent successfully
    } catch (error) {
      console.error('Error sending reset email:', error);
    }
  }
}

}
</script>
