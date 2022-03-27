<template>
  <div class="form">
    <h1>LOG OUT</h1>
    <div class="button">
      <button @click="logout" class="logout-button">ログアウト</button>
    </div>
  </div>
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

<style>
.form {
  background: #fafafa;
  text-align: center;
  margin: 3em auto;
  padding: 0 1em;
  max-width: 400px;
}

h1 {
  text-align: center;
  padding: 1em 0;
  font-family: "MS Pゴシック", sans-serif;
}

.button {
  padding: 0 0 2em;
  width: 100%;
}

.button .logout-button {
  background: #f16272;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  transition: background 0.3s ease-in-out;
  width: 80%;
}

.logout-button:hover {
  background: #ee3e52;
}
</style>
