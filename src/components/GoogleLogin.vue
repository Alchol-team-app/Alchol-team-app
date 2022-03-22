<template>
  <button @click="login">Googleログイン</button>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default {
  methods: {
    login() {
      const provider = new GoogleAuthProvider()
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly")
      const auth = getAuth()
      auth.languageCode = "it"
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          credential.accessToken
          result.user
          // ...
          this.$router.push("/home")
        })
        .catch((error) => {
          error.code
          error.message
          error.email
          GoogleAuthProvider.credentialFromError(error)
          // ...
        })
    },
  },
}
</script>
