<template lang="">
<nav class="flex  mb-6 bg-purple-600 text-white text-1xl  font-sans h-12  w-full">
<RouterLink to="/" class="pl-80 text-white font-sans">Home</RouterLink>
<RouterLink to="/about"  class="pl-12 text-white font-sans">About</RouterLink>
<RouterLink to="/services"  class="pl-12 text-white font-sans">Services</RouterLink>
<RouterLink to="/signup"  class="pl-12 text-white font-sans">Signup</RouterLink>
<RouterLink to="/login"  class="pl-12 text-white font-sans">Login</RouterLink>
</nav> 
<RouterView></RouterView> 
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>