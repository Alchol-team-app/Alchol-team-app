<template>
  <div class="C_app">
    <nav class="navigation">
      <router-link to="/cocktail_postform" class="C_toukou">投稿</router-link>
    </nav>
    <div
      class="C_post_box"
      v-for="cocktail_postform in cocktail_postforms"
      :key="cocktail_postform.id"
    >
      <p>id：{{ cocktail_postform.id }}<br /></p>
      <div class="C_post_box_text">
        お酒の名称：{{ cocktail_postform.name }}<br />
        {{ cocktail_postform.text }}<br />
      </div>
      <div C_phot_frame>
        <img class="C_photo" v-bind:src="cocktail_postform.image_url" />
      </div>
      <button>いいね！</button>
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
.C_app {
  background-color: #ffffbb;
  padding: 5%;
}
.C_toukou {
  position: relative;
  left: 10%;
  background-color: #baddff;
  border: 10px solid transparent;
  border-radius: 35px;
}
.C_post_box {
  position: relative;
  margin: 2em 0 2em 40px;
  padding: 8px 15px;
  background: #ddbaff;
  border-radius: 30px;
}
.C_post_box:before {
  font-family: FontAwesome;
  content: "\f111";
  position: absolute;
  font-size: 15px;
  left: -40px;
  bottom: 0;
  color: #ddbaff;
}
.C_post_box:after {
  font-family: FontAwesome;
  content: "\f111";
  position: absolute;
  font-size: 23px;
  left: -23px;
  bottom: 0;
  color: #ddbaff;
}
.C_post_box p {
  margin: 0;
  padding: 0;
}
.C_photo_frame {
  text-align: center;
}
.C_photo {
  width: 75%;
}
.C_post_box_text {
  margin: 2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
}
.C_post_box_text:before,
.C_post_box_text:after {
  content: "";
  position: absolute;
  top: -10px;
  width: 2px;
  height: -webkit-calc(100% + 20px);
  height: calc(100% + 20px);
  background-color: black;
}
.C_post_box_text:before {
  left: 10px;
}
.C_post_box_text:after {
  right: 10px;
}
.C_post_box_text p {
  margin: 0;
  padding: 0;
}
</style>
