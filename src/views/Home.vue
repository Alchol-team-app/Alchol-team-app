<template>
  <body>
    <Header />
    <div class="lower-tittle">
      <h1 class="main-tittle">各種紹介</h1>
    </div>

    <div class="layout-main">
      <div class="cocktail">
        <!-- <h1 class="sub-tittle">カクテル紹介・投稿欄</h1> -->
        <router-link to="/cocktail" v-on:click="カクテル;" class="router-link"
          ><h1>カクテル紹介・投稿欄</h1>
          <!-- <router-link :to="/cocktail">Topへ戻る</router-link> -->
          <div class="cocktail-menue">
            <img
              src="@/assets/adptDSC_3614-750x499.jpg"
              alt="カクテル"
              class="picture1"
            />
            <div class="cocktail-detail">
              アルコールを含む調合飲料。調合の仕方を一般に処方といい，種類は3000を超えるという。<br />
              1920年代にロンドンやパリで流行し，日本でも大正末期にはカクテル・バーが登場。
            </div>
          </div>
        </router-link>
      </div>

      <div class="zizake">
        <router-link to="/zizake" v-on:click="地酒;" class="router-link"
          ><h1>地酒紹介・投稿欄</h1>
          <div class="zizake-menue">
            <img src="@/assets/download.jpg" alt="地酒" class="picture2" />
            <div class="zizake-detail">
              地酒とは、その土地の文化に合わせ、その土地の材料で造られる個性豊かな日本酒である。<br />
              1970年代に地酒ブームが起こり、造り手が本当に作りたい酒造りを試みる流れが生まれ、<br />
              幻の銘酒といわれるような地酒が数多く誕生。
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="recomend-menue">
      <h1>オススメのお酒欄</h1>
    </div>
    <div class="box">私達のオススメのお酒</div>
  </body>
</template>
<script>
import Header from "@/components/Header.vue"
export default {
  components: {
    Header,
  },
  methods: {
    intro1() {
      this.$router.push("/cocktail")
    },
    intro２() {
      this.$router.push("/zizake")
    },
  },
}
</script>

<style>
body {
  background-color: lemonchiffon;
  font-family: monospace;
  margin: 0;
  padding: 0;
}
.lower-tittle {
  display: flex;
  justify-content: center;
}
.layout-main {
  display: flex;
  justify-content: space-evenly;
}
h1 {
  display: flex;
  justify-content: center;
}
.sub-tittle {
  display: flex;
  justify-content: center;
}

.cocktail {
  display: flex;
  flex-direction: column;
  width: 35%;
  background-color: white;
  border-radius: 10px;
  border: solid 3px #000000;
  margin-left: 10%;
}

.zizake {
  display: flex;
  flex-direction: column;
  width: 35%;
  height: max-content;
  background-color: white;
  border-radius: 10px;
  border: solid 3px #000000;
  margin-right: 10%;
}
.router-link {
  text-decoration: none;
  color: black;
}
.picture1 {
  right: 20%;
  width: 80%;
  margin-left: 10%;
  border-radius: 10px;
}
.picture2 {
  height: auto;
  width: 80%;
  margin-left: 10%;
  border-radius: 10px;
}
.cocktail-detail {
  font-size: x-small;
  border-radius: 5px;
  display: flex;
  justify-content: center;
}

.zizake-detail {
  font-size: x-small;
  border-radius: 5px;
  display: flex;
  justify-content: center;
}

.main-tittle {
  position: relative;
  text-align: center;
  font-size: 30px;
}
.main-tittle:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  border-bottom: solid 2px #000;
  transform: translateX(-50%);
  animation: border_anim 3s linear forwards;
}

@keyframes border_anim {
  0% {
    width: 100%;
  }
  100% {
    width: 450px;
  }
}
.recomend-menue {
  position: relative;
  text-align: center;
}
/* なぜ逆になるのか質問  */
.recomend-menue:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  border-bottom: solid 2px #000;
  transform: translateX(-50%);
  animation: border_anim 3s linear forwards;
  background-color: rgb(255, 255, 255);
}
.box {
  display: flex;
  justify-content: center;
  background-color: white;
  height: 500px;
  border-radius: 15px;
  margin-left: 13%;
  margin-right: 13%;
  border: solid 3px #000000;
}
</style>
