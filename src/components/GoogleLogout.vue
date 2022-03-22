<template>
  <button @click="logout">ログアウト</button>
</template>

<script>
import { getAuth, signOut } from "firebase/auth"

export default {
  methods: {
    logout() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("ログアウトしました")
          this.$router.push("/")
        })
        .catch((error) => {
          // An error happened.
          console.log(`ログアウト時にエラーが発生しました (${error})`)
        })
    },
  },
}
</script>
