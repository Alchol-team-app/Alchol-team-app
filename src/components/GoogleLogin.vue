<template>
  <div class="title">タイトル</div>
  <div class="form">
    <h1>Log In</h1>
    <div class="button">
      <button @click="login" class="login-button">Googleでログイン</button>
    </div>
  </div>
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

<style>
body {
  background-image: url("../assets/osake.png");
  background-size: cover;
  z-index: 0;
  height: 100%;
}

.title {
  text-align: center;
  font-size: 4em;
  margin: 1em auto 0;
  padding: 1em 0 0;
  color: #fff;
}

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
}

.button {
  padding: 0 0 2em;
  width: 100%;
}

.button .login-button {
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

.login-button:hover {
  background: #ee3e52;
}
</style>
