<template>
  <nav class="navigation">
    <router-link to="/postform">投稿ページ</router-link>
  </nav>
  <div class="post_box" v-for="postform in postforms" :key="postform.id">
    <p>
      {{ postform.id }}<br />
      {{ postform.date }}
      {{ postform.name }}<br />
      {{ postform.area }}<br />
      {{ postform.text }}<br />

      <img src="" />
    </p>
    <button>いいね！</button>
    <button>お気に入り★</button>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"
export default {
  created() {
    getDocs(collection(db, "postforms")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.postforms.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>

<style>
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
