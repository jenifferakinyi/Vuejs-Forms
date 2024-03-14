<template>
    <div>
        <h2>Reset Password</h2>
        <form @submit.prevent="resetPassword">
            <input type="password" v-model="password" placeholder="Enter new password" class="block border border-grey-light w-full p-3 rounded mb-4" required>
            <input type="password" v-model="confirmPassword" placeholder="Confirm new password" class="block border border-grey-light w-full p-3 rounded mb-4" required>
            <button type="submit" class="w-full text-center py-3 rounded bg-purple-600 text-white hover:bg-green-dark focus:outline-none my-1">Reset Password</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        async resetPassword() {
            try {
                if (this.password !== this.confirmPassword) {
                    throw new Error('Passwords do not match');
                }
                // Call your backend API to reset the password
                const response = await fetch('http://localhost:7000/reset-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ password: this.password })
                });
                if (response.ok) {
                    // Redirect the user or display a success message
                    console.log('Password reset successful');
                } else {
                    throw new Error('Failed to reset password');
                }
            } catch (error) {
                console.error('Reset password error:', error.message);
                // Display an error message to the user
                alert('Failed to reset password. Please try again.');
            }
        }
    }
}
</script>
