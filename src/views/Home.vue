<template>
  <body>
    <Header />
    <div class="lower-tittle">
      <h1 class="main-tittle">各種紹介</h1>
    </div>

    <div class="layout-main">
      <div class="cocktail">
        <!-- <h1 class="sub-tittle">カクテル紹介・投稿欄</h1> -->
        <router-link
          to="/cocktail_browsing"
          v-on:click="カクテル;"
          class="router-link"
          ><h1>カクテル紹介</h1>
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
        <router-link to="/map" v-on:click="地酒;" class="router-link"
          ><h1>地酒紹介</h1>
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
    <div class="box">
      <div class="wrap slide-paused" ontouchstart="">
        <ul class="slideshow">
          <li class="content content-hover">
            <h2 class="last2">カシスオレンジ</h2>
            <img src="@/assets/カシオレ.png" class="pic3" />
            <div class="last">
              カシスオレンジはカシスリキュールをオレンジジュースで割った定番のカクテルです。
              グラスの底にカシスリキュールを注いで、氷を入れて上からオレンジジュースを注ぐと、オレンジと紫色の見た目も美しいカクテルが出来ます。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">白岳しろ</h2>
            <img src="@/assets/白岳.jpeg" class="pic3" />
            <div class="last">
              癖が無く、焼酎の独特な香りや味が苦手という方でも比較的飲みやすい焼酎です。
              白岳しろは、フルーティな香りが特徴でもあるので女性にも好まれると思います。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">ジン・トニック</h2>
            <img src="@/assets/ジン.jpeg" class="pic3" />
            <div class="last">
              ジンとトニックウォーターを混ぜたカクテル。ライムをのせると家でもオシャレなバー気分を味わえます！
              ライムの爽やかさとトニックウォーターの甘さでとても飲みやすいカクテルです。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">月のセレナーデ(赤)</h2>
            <img src="@/assets/ワイン.jpg" class="pic3" />
            <div class="last">
              岩手県産のぶどうから作られた地ワインです。
              でも飲めるような優しい味です。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">雪雀•純米大吟醸</h2>
            <img src="@/assets/日本酒.webp" class="pic3" />
            <div class="last">
              透明感のある香りと、ほんのりとした甘味と旨味が調和された気品ある味わいです。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">テキーラサンライズ</h2>
            <img src="@/assets/パフェ.jpg" class="pic3" />
            <div class="last">
              テキーラのキレのある味わいとオレンジジュースの爽やかな酸味、
              グレナデンシロップの濃厚な甘みが合わさった甘酸っぱい味が特徴です。
            </div>
          </li>
        </ul>
        <ul class="slideshow">
          <li class="content content-hover">
            <h2 class="last2">カシスオレンジ</h2>
            <img src="@/assets/カシオレ.png" class="pic3" />
            <div class="last">
              カシスオレンジはカシスリキュールをオレンジジュースで割った定番のカクテルです。
              グラスの底にカシスリキュールを注いで、氷を入れて上からオレンジジュースを注ぐと、オレンジと紫色の見た目も美しいカクテルが出来ます。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">白岳しろ</h2>
            <img src="@/assets/白岳.jpeg" class="pic3" />
            <div class="last">
              癖が無く、焼酎の独特な香りや味が苦手という方でも比較的飲みやすい焼酎です。
              白岳しろは、フルーティな香りが特徴でもあるので女性にも好まれると思います。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">ジン・トニック</h2>
            <img src="@/assets/ジン.jpeg" class="pic3" />
            <div class="last">
              ジンとトニックウォーターを混ぜたカクテル。ライムをのせると家でもオシャレなバー気分を味わえます！
              ライムの爽やかさとトニックウォーターの甘さでとても飲みやすいカクテルです。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">月のセレナーデ(赤)</h2>
            <img src="@/assets/ワイン.jpg" class="pic3" />
            <div class="last">
              岩手県産のぶどうから作られた地ワインです。
              でも飲めるような優しい味です。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">雪雀•純米大吟醸</h2>
            <img src="＠/assets/日本酒.webp" class="pic3" />
            <div class="last">
              透明感のある香りと、ほんのりとした甘味と旨味が調和された気品ある味わいです。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">テキーラサンライズ</h2>
            <img src="@/assets/パフェ.jpg" class="pic3" />
            <div class="last">
              テキーラのキレのある味わいとオレンジジュースの爽やかな酸味、
              グレナデンシロップの濃厚な甘みが合わさった甘酸っぱい味が特徴です。
            </div>
          </li>
        </ul>
        <ul class="slideshow">
          <li class="content content-hover">
            <h2 class="last2">カシスオレンジ</h2>
            <img src="@/assets/カシオレ.png" class="pic3" />
            <div class="last">
              カシスオレンジはカシスリキュールをオレンジジュースで割った定番のカクテルです。
              グラスの底にカシスリキュールを注いで、氷を入れて上からオレンジジュースを注ぐと、オレンジと紫色の見た目も美しいカクテルが出来ます。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">白岳しろ</h2>
            <img src="@/assets/白岳.jpeg" class="pic3" />
            <div class="last">
              癖が無く、焼酎の独特な香りや味が苦手という方でも比較的飲みやすい焼酎です。
              白岳しろは、フルーティな香りが特徴でもあるので女性にも好まれると思います。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">ジン・トニック</h2>
            <img src="@/assets/ジン.jpeg" class="pic3" />
            <div class="last">
              ジンとトニックウォーターを混ぜたカクテル。ライムをのせると家でもオシャレなバー気分を味わえます！
              ライムの爽やかさとトニックウォーターの甘さでとても飲みやすいカクテルです。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">月のセレナーデ(赤)</h2>
            <img src="＠/assets/ワイン.jpg" class="pic3" />
            <div class="last">
              岩手県産のぶどうから作られた地ワインです。
              でも飲めるような優しい味です。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">雪雀•純米大吟醸</h2>
            <img src="＠/assets/日本酒.webp" class="pic3" />
            <div class="last">
              透明感のある香りと、ほんのりとした甘味と旨味が調和された気品ある味わいです。
            </div>
          </li>
          <li class="content content-hover">
            <h2 class="last2">テキーラサンライズ</h2>
            <img src="@/assets/パフェ.jpg" class="pic3" />
            <div class="last">
              テキーラのキレのある味わいとオレンジジュースの爽やかな酸味、
              グレナデンシロップの濃厚な甘みが合わさった甘酸っぱい味が特徴です。
            </div>
          </li>
        </ul>
      </div>
    </div>
  </body>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    Footer,
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
  transition: all 0.8s;
}
.cocktail:hover {
  transform: translateY(-10px);
  box-shadow: 0 3px 10px 0 #333;
  cursor: pointer;
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
  transition: all 0.8s;
}
.zizake:hover {
  transform: translateY(-10px);
  box-shadow: 0 3px 10px 0 #333;
  cursor: pointer;
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
  color: rgb(222, 212, 212);
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
  color: white;
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
  height: 400px;
  border-radius: 15px;
  margin-left: 13%;
  margin-right: 13%;
  /* border: solid 3px #000000; */
}

.pic3 {
  margin: 50px;
  margin-top: -10px;
  border-radius: 10px;
  display: flex;
  width: 200px; /*任意の横幅を指定*/
  height: 200px; /*任意の高さを指定*/
  object-fit: cover;
}

.wrap {
  display: flex;
  align-items: center;
  /* height: 340px; */
  overflow: hidden;
  background-color: rgba (148, 255, 226, 0.5);
}
.slideshow {
  display: flex;
  animation: loop-slide 60s infinite linear 1s both;
  margin: 0px;
  padding: 0px;
  background-color: rgb(219 121 32);
}
@keyframes loop-slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.slide-paused:hover .slideshow {
  animation-play-state: paused;
}
.content-hover {
  transition: all 0.8s;
  border-radius: 10px;
  border: solid 3px #000000;
  margin: 20px;
  background-color: white;
}

.last2 {
  display: flex;
  justify-content: center;
}
.last {
  display: flex;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
}
ul {
  list-style-type: none;
}
</style>
