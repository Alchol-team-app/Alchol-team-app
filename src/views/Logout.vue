<template>
  <div class="logout">
    <GoogleLogout />
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleLogout from "@/components/GoogleLogout.vue"

export default {
  name: "Logout",
  components: {
    GoogleLogout,
  },
}
</script>
