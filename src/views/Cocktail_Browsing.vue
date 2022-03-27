<template>
  <Header />
  <div class="C_app">
    <div class="idou"></div>
    <nav class="navigation">
      <router-link to="/cocktail_postform" class="C_toukou">投稿</router-link>
      <div class="C_kensaku">検索</div>
    </nav>
    <div
      class="C_post_box"
      v-for="cocktail_postform in cocktail_postforms"
      :key="cocktail_postform.id"
    >
      <p>id：{{ cocktail_postform.id }}<br /></p>
      <p>
        {{ cocktail_postform.user_name }}
      </p>
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
  <Footer />
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  data() {
    return {
      cocktail_postforms: [],
    }
  },
  methods: {},
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
  components: { Header, Footer },
}
</script>

<style>
.C_app {
  background-color: #ffffbb;
  padding: 5%;
}
.idou {
  display: inline;
}
.C_toukou {
  padding: auto;
  position: relative;
  left: 10%;
  width: 8rem;
  text-align: center;
  background-color: #baddff;
  border: 10px solid transparent;
  border-radius: 35px;
}
.C_kensaku {
  text-align: center;
  position: relative;
  left: 50%;
  width: 8rem;
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
  width: 50%;
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
.star5_rating {
  position: relative;
  z-index: 0;
  display: inline-block;
  white-space: nowrap;
  color: #cccccc;
}

.star5_rating:before,
.star5_rating:after {
  content: "★★★★★";
}

.star5_rating:after {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  color: #ffcf32;
}

.star5_rating[data-rate="5"]:after {
  width: 100%;
} /* 星5 */

.star5_rating[data-rate="4"]:after {
  width: 80%;
} /* 星4 */

.star5_rating[data-rate="3"]:after {
  width: 60%;
} /* 星3 */

.star5_rating[data-rate="2"]:after {
  width: 40%;
} /* 星2 */

.star5_rating[data-rate="1"]:after {
  width: 20%;
} /* 星1 */

.star5_rating[data-rate="0"]:after {
  width: 0%;
} /* 星0 */
.heart {
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 220px;
  padding: 10px 25px;
  color: #fff;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  background: rgb(245, 173, 221);
}
.heart:hover {
  background: rgb(253, 146, 146);
}
.iine_count {
  position: relative;
  background: #fff;
  width: 5rem;
  text-align: center;
  left: 45%;
}
</style>
