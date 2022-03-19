<template>
  <div>
    <nav class="navigation">
      <router-link to="/cocktail_postform">投稿ページ</router-link>
    </nav>
    <div
      class="C_post_box"
      v-for="cocktail_postform in cocktail_postforms"
      :key="cocktail_postform.id"
    >
      <p>
        {{ cocktail_postform.id }}<br />
        {{ cocktail_postform.name }}<br />
        {{ cocktail_postform.text }}<br />

        <img src="" />
      </p>
      <button>いいね！</button>
      <button>お気に入り★</button>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"
export default {
  data() {
    return {
      cocktail_postforms: [],
    }
  },
  created() {
    getDocs(collection(db, "cocktail_postforms")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.cocktail_postforms.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>

<style>
.C_post_box {
  position: relative;
  margin: 2em 0 2em 40px;
  padding: 8px 15px;
  background: #e68de6;
  border-radius: 30px;
}
.C_post_box:before {
  font-family: FontAwesome;
  content: "\f111";
  position: absolute;
  font-size: 15px;
  left: -40px;
  bottom: 0;
  color: #e68de6;
}
.C_post_box:after {
  font-family: FontAwesome;
  content: "\f111";
  position: absolute;
  font-size: 23px;
  left: -23px;
  bottom: 0;
  color: #e68de6;
}
.C_post_box p {
  margin: 0;
  padding: 0;
}
</style>
