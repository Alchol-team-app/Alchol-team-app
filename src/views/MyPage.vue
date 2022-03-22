<template>
  <nav class="navigation">
    <router-link to="/home">Home</router-link>
  </nav>
  <div>
    <div>カクテル投稿履歴</div>
    <div
      class="post_box"
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
  <div>地酒投稿履歴</div>
  <div class="post_box" v-for="postform in postforms" :key="postform.id">
    <p>
      {{ postform.id }}<br />
      {{ postform.bought }}<br />
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
  data() {
    return {
      cocktail_postforms: [],
      postforms: [],
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
    getDocs(collection(db, "postforms")).then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(this.postforms),
          this.postforms.push({
            id: doc.id,
            ...doc.data(),
          })
      })
    })
  },
}
</script>
