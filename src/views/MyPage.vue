<template>
  <Header />
  <div>
    <div class="sub">カクテル投稿履歴</div>
    <div
      class="C_post_box"
      v-for="cocktail_postform in checkAuth"
      :key="cocktail_postform.id"
    >
      <p>id：{{ cocktail_postform.id }}<br /></p>
      <p>
        <span
          class="star5_rating"
          v-bind:data-rate="cocktail_postform.point"
        ></span>
        {{ cocktail_postform.point }}
      </p>
      <div class="C_post_box_text">
        <p>
          お酒の名称：{{ cocktail_postform.name }}
          {{ cocktail_postform.cocktail }}<br />
          {{ cocktail_postform.text }}<br />
        </p>
        <div class="C_photo_frame">
          <img class="C_photo" v-bind:src="cocktail_postform.image_url" />
        </div>
      </div>
    </div>
  </div>
  <div class="sub">地酒投稿履歴</div>
  <div class="post_box" v-for="postform in checkAuth1" :key="postform.id">
    <p>id:{{ postform.id }}<br /></p>
    <p>
      <span class="star5_rating" v-bind:data-rate="postform.point"></span>
      {{ postform.point }}
    </p>
    <div class="post_box_text">
      <p>
        購入日：{{ postform.bought }}<br />
        お酒の名称：{{ postform.name }} （{{ postform.area }}）<br />
        {{ postform.text }}<br />
      </p>
      <div class="photo_frame">
        <img class="photo" v-bind:src="postform.image_url" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { getAuth } from "firebase/auth"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  data() {
    return {
      count: 0,
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
    }),
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
  computed: {
    checkAuth() {
      const auth = getAuth()
      const user = auth.currentUser

      return this.cocktail_postforms.filter((cocktail_postform) => {
        return cocktail_postform.user_name === user.uid
      })
    },
    checkAuth1() {
      const auth = getAuth()
      const user = auth.currentUser

      return this.postforms.filter((postform) => {
        return postform.user_name === user.uid
      })
    },
  },
  components: { Header, Footer },
}
</script>

<style>
.sub {
  text-align: center;
  font-size: 3em;
  margin: 1em auto 0;
  color: #000;
  padding: 1rem 2rem;
  border-bottom: 3px solid #000;
  background: #f4f4f4;
}
</style>
