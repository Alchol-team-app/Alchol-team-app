<template>
  <div class="home">
    <GoogleLogin msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleLogin from "@/components/GoogleLogin.vue"

export default {
  name: "Login",
  components: {
    GoogleLogin,
  },
}
</script>
