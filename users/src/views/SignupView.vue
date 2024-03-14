<template lang="">
    <!-- component -->
    <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <form @submit.prevent="signup">
                    <input 
                        type="text"
                        v-model="username"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Username" />

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
                    >Create Account</button><br>
                    <div class="text-purple-600 mt-6 underline">
                    Already have an account 
                    <a class="underline border-b border-blue text-purple-600 " href="../login/">
                        Log in
                    </a>.
                </div>
                </form>

                <div class="text-purple-600 mt-6 underline">
                    Already have an account 
                    <a class="underline border-b border-blue text-purple-600 " href="../login/">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async signup() {
            try {
                const response = await fetch('http://localhost:7000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.username,
                        email: this.email,
                        password: this.password
                    })
                });
                const data = await response.json();
                console.log(data); // Handle response from the server
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
};
</script>

<style lang="">
    
</style>
