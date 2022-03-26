<template>
  <div class="app">
    <nav class="navigation">
      <div>{{ this.$route.params.id }}</div>
      <router-link to="/postform" class="toukou">投稿</router-link>
    </nav>
    <div
      class="post_box"
      v-for="(postform, index) in postforms"
      :key="postform.id"
    >
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

      <button class="heart" v-on:click="countup(index)">拍手👏！</button>
      <div class="iine_count">
        {{ postform.iinecount }}
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"
export default {
  data() {
    return {
      postforms: [],
    }
  },
  methods: {
    countup: function (index) {
      this.postforms[index].iinecount += 1
    },
  },
  created() {
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
    resultKey() {
      return this.postforms.filter((postform) => {
        return postform.area === this.$route.params.id
      })
    },
  },
}
</script>

<style>
.app {
  background-color: antiquewhite;
  padding: 5%;
}
.photo_frame {
  text-align: center;
}
.photo {
  width: 50%;
}
.toukou {
  position: relative;
  left: 10%;
  background-color: #ceb849;
  border: 10px solid transparent;
  border-radius: 35px;
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
.post_box_text {
  margin: 2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
}
.post_box_text:before,
.post_box_text:after {
  content: "";
  position: absolute;
  top: -10px;
  width: 2px;
  height: -webkit-calc(100% + 20px);
  height: calc(100% + 20px);
  background-color: black;
}
.post_box_text:before {
  left: 10px;
}
.post_box_text:after {
  right: 10px;
}
.post_box_text p {
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
</style>
