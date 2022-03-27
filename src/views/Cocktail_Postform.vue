<template>
  <Header />
  <div class="cocktail-app">
    <div class="C_textbox">
      <span class="text_title">どんなお酒？</span>
      <div>
        お酒の名前 <input class="osake_input" type="text" v-model="osake" />
      </div>

      <div class="input_and_image">
        <textarea
          class="post_input"
          type="text"
          v-model="post"
          placeholder="紹介文を書こう！"
          maxlength="400"
        />
        <div class="image_preview" v-if="url"><img v-bind:src="url" /></div>
      </div>
      <button v-on:click="hyouji" class="C_photo_button">+ 写真</button>
      <div v-if="seen">
        <input
          type="file"
          accept="image/*"
          ref="preview"
          @change="uploadfile"
        />
      </div>

      <div>
        <span>
          <input
            id="tag1"
            type="checkbox"
            name="tag"
            value="ジン"
            v-model="tag"
          /><label for="tag1">ジン系</label>
          <input
            id="tag2"
            type="checkbox"
            name="tag"
            value="ラム"
            v-model="tag"
          /><label for="tag2">ラム系</label>
          <input
            id="tag3"
            type="checkbox"
            name="tag"
            value="ウォッカ"
            v-model="tag"
          /><label for="tag3">ウォッカ系</label>
          <input
            id="tag4"
            type="checkbox"
            name="tag"
            value="テキーラ"
            v-model="tag"
          /><label for="tag4">テキーラ系</label>
          <input
            id="tag5"
            type="checkbox"
            name="tag"
            value="その他"
            v-model="tag"
          /><label for="tag5">その他</label>
        </span>
      </div>
      <div class="C_review">
        <div class="stars">
          <span>
            <input
              id="review01"
              type="radio"
              name="review"
              value="5"
              v-model="review"
            /><label for="review01">★</label>
            <input
              id="review02"
              type="radio"
              name="review"
              value="4"
              v-model="review"
            /><label for="review02">★</label>
            <input
              id="review03"
              type="radio"
              name="review"
              value="3"
              v-model="review"
            /><label for="review03">★</label>
            <input
              id="review04"
              type="radio"
              name="review"
              value="2"
              v-model="review"
            /><label for="review04">★</label>
            <input
              id="review05"
              type="radio"
              name="review"
              value="1"
              v-model="review"
            /><label for="review05">★</label>評価
          </span>
        </div>
      </div>
    </div>

    <button class="C_post_button" v-on:click="postTweet">投稿</button>
  </div>
  <Footer />
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  data() {
    return {
      seen: false,
      id: "",
      osake: "",
      post: "",
      url: "",
      review: "0",
      tag: [],
      cocktail_postforms: [],
    }
  },
  methods: {
    hyouji: function () {
      this.seen = true
    },
    uploadfile() {
      const file = this.$refs.preview.files[0]
      this.url = URL.createObjectURL(file)
    },
    postTweet() {
      const file = this.$refs.preview.files[0]
      const storage = getStorage()
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)

      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.uid = user.uid
        } else {
          // User is signed out
          // ...
        }
      })

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log("Upload is " + progress + "% done")
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused")
              break
            case "running":
              console.log("Upload is running")
              break
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break
            case "storage/canceled":
              // User canceled the upload
              break
            // ...
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL)
            addDoc(collection(db, "cocktail_postforms"), {
              date: new Date(),
              user_name: this.uid,
              name: this.osake,
              text: this.post,
              point: this.review,
              cocktail: this.tag,
              image_url: downloadURL,
            })
          })
        }
      )
    },
  },
  components: { Header, Footer },
}
</script>

<style>
.cocktail_app {
  padding: auto;
}
.C_review {
  display: flex;
  padding: 1rem;
}
.stars span {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  position: relative;
  left: 50%;
}

.stars input[type="radio"] {
  display: none;
}
.stars label {
  color: #d2d2d2;
  font-size: 30px;
  padding: 0 5px;
  cursor: pointer;
}

.stars label:hover,
.stars label:hover ~ label,
.stars input[type="radio"]:checked ~ label {
  color: #f8c601;
}
.post_input {
  width: 50%;
  height: 20rem;
  resize: none;
  font-size: medium;
  font-family: sans-serif;
}
textarea::placeholder {
  font-family: sans-serif;
  font-size: medium;
}
.image_preview {
  width: 50%;
}
.input_and_image {
  display: flex;
}
.C_photo_button {
  display: inline-block;
  text-decoration: none;
  color: #9088e3;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  border: solid 2px #9088e3;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  transition: 0.4s;
}
.C_photo_button:hover {
  background: #e39088;
}
.C_post_button {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #9088e3;
  border: solid 2px #9088e3;
  border-radius: 3px;
  transition: 0.4s;
  width: 70px;
  height: 50px;
  position: relative;
  left: 50%;
}

.C_post_button:hover {
  background: #9088e3;
  color: white;
}

.C_textbox {
  position: relative;
  margin: 2em 0;
  padding: 0.5em 1em;
  border: solid 3px #9088e3;
  border-radius: 8px;
  background-color: ivory;

  height: 100%;
}
.C_textbox .text_title {
  position: absolute;
  display: inline-block;
  top: -13px;
  left: 10px;
  padding: 0 9px;
  line-height: 1;
  font-size: 19px;
  background: #fff;
  color: #9088e3;
  font-weight: bold;
}
</style>
