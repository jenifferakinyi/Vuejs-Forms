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