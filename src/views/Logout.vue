<template>
  <Header />
  <div class="logout">
    <GoogleLogout />
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import GoogleLogout from "@/components/GoogleLogout.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "Logout",
  components: {
    GoogleLogout,
    Header,
    Footer,
  },
}
</script>
