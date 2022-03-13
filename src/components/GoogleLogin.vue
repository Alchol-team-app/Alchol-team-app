<script>
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth"

const provider = new GoogleAuthProvider()
provider.addScope("https://www.googleapis.com/auth/contacts.readonly")

const auth = getAuth()
auth.languageCode = "it"
signInWithRedirect(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result)
    credential.accessToken
    result.user
    // ...
  })
  .catch((error) => {
    error.code
    error.message
    error.email
    GoogleAuthProvider.credentialFromError(error)
    // ...
  })
</script>
