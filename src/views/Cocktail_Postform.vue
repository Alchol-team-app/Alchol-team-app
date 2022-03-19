<template>
  <div class="post-app">
    <div class="textbox">
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
        <div class="image_preview" v-if="url"><img src="url" /></div>
      </div>
      <button v-on:click="hyouji" class="photo_button">+ 写真</button>
      <div v-if="seen">
        <input
          type="file"
          accept="image/*"
          ref="preview"
          @change="uploadfile"
        />
      </div>

      <div class="">
        <span>
          <input
            id="tag1"
            type="checkbox"
            name="tag"
            value=""
            v-model="tag"
          /><label for="tag1">ジン</label>
          <input
            id="tag2"
            type="checkbox"
            name="tag"
            value=""
            v-model="tag"
          /><label for="tag2"></label>
          <input
            id="tag3"
            type="checkbox"
            name="tag"
            value=""
            v-model="tag"
          /><label for="tag3"></label>
          <input
            id="tag4"
            type="checkbox"
            name="tag"
            value=""
            v-model="tag"
          /><label for="tag4"></label>
          <input
            id="tag5"
            type="checkbox"
            name="tag"
            value=""
            v-model="tag"
          /><label for="tag5"></label>
        </span>
      </div>
      <div class="area_and_review">
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

    <button class="post_button" v-on:click="postTweet">投稿</button>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase"

export default {
  data() {
    return {
      seen: false,
      id: "",
      date: "",
      day: "",
      name: "",
      text: "",
      url: "",
      point: "",

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
      addDoc(collection(db, "cocktail_postforms"), {
        date: new Date(),
        name: this.osake,
        text: this.post,
        point: this.review,
        photo: this.url,
      })
    },
  },
}
</script>
<style>
.area_and_review {
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
  height: 20rem;
}
.input_and_image {
  display: flex;
}
.photo_button {
  display: inline-block;
  text-decoration: none;
  color: #990000;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  border: solid 2px #990000;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  transition: 0.4s;
}
.photo_button:hover {
  background: #d3b2b2;
}
.post_button {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #990000;
  border: solid 2px #990000;
  border-radius: 3px;
  transition: 0.4s;
  width: 70px;
  height: 50px;
  position: relative;
  left: 50%;
}

.post_button:hover {
  background: #990000;
  color: white;
}
.file_input {
  display: inline-block;
  text-decoration: none;
  background: #990000;
  color: #fff;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  transition: 0.4s;
  position: fixed;
}

.textbox {
  position: relative;
  margin: 2em 0;
  padding: 0.5em 1em;
  border: solid 3px #990000;
  border-radius: 8px;
  background-color: ivory;

  height: 30rem;
}
.textbox .text_title {
  position: absolute;
  display: inline-block;
  top: -13px;
  left: 10px;
  padding: 0 9px;
  line-height: 1;
  font-size: 19px;
  background: #fff;
  color: #990000;
  font-weight: bold;
}
.post_box {
  position: relative;
  margin: 2em 0 2em 40px;
  padding: 8px 15px;
  background: #d3b2b2;
  border-radius: 30px;
}
.post_box:before {
  font-family: FontAwesome;
  content: "\f111";
  position: absolute;
  font-size: 15px;
  left: -40px;
  bottom: 0;
  color: #d3b2b2;
}
.post_box:after {
  font-family: FontAwesome;
  content: "\f111";
  position: absolute;
  font-size: 23px;
  left: -23px;
  bottom: 0;
  color: #d3b2b2;
}
.post_box p {
  margin: 0;
  padding: 0;
}
</style>
