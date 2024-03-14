<template>
    <div>
        <h2>Forgot Password</h2>
        <form @submit.prevent="sendResetEmail">
            <input type="email" v-model="email" placeholder="Enter your email" class="block border border-grey-light w-full p-3 rounded mb-4" required>
            <button type="submit" class="w-full text-center py-3 rounded bg-purple-600 text-white hover:bg-green-dark focus:outline-none my-1">Send Reset Email</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        };
    },
    methods: {
        async sendResetEmail() {
            try {
                await fetch('http://localhost:7000/reset-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: this.email })
                });
               
                window.alert('Reset email has been sent to your email address.');
            } catch (error) {
                console.error('Error sending reset email:', error);
        
                window.alert('Error sending reset email. Please try again later.');
            }
        }
    }
}
</script>
