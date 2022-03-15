<template>
  <div class="login">
    <GoogleLogin />
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
