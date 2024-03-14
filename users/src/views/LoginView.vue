<template lang="">
    <div>
        <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Log in</h1>
                <form @submit.prevent="login">


                    <input 
                        type="text"
                        v-model="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        v-model="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-purple-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Login To Account</button>
                    <br>
                    <div class="text-purple-600 mt-6 underline">
                        Don't have an account 
                        <a class="underline border-b border-blue text-purple-600 " href="../home/">
                            Signup
                        </a>.
                    </div>
                </form>
            </div>
        </div>
    </div> 
    </div>
</template>
<script>
import router from '../router'; // Import the router

export default {
    data() {
        return {
            email: '',
            password: '',
            registrationSuccess: false
        };
    },
    methods: {
        async login() {
            try {
                // Your login logic...
                // After successful login, set registrationSuccess to true
                this.registrationSuccess = true;
                
                // Redirect to home view
                router.push({ name: 'home' }); // Navigate to the home view
            } catch (error) {
                console.error('Login error:', error);
                // Handle login errors
            }
        }
    }
};
</script>

<style lang="">
    
</style>