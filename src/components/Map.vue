<template>
  <header>
    <h1 class="meguri">日本地酒巡り</h1>
  </header>
  <body>
    <div id="app">
      <div class="japan_map">
        <div class="japan_graph">
          <tr1>
            <div class="retu">
              <th scope="row1">北海道</th>
              <router-link to="/Show/北海道" v-on:click="北海道;"
                ><td>北海道</td></router-link
              >
            </div>
          </tr1>
          <tr>
            <div class="retu">
              <th scope="row">東北地方</th>
              <router-link to="/aomori" v-on:click="青森県;"
                ><td>青森県</td></router-link
              >
              <router-link to="/iwate" v-on:click="岩手県;"
                ><td>岩手県</td></router-link
              >
              <router-link to="/miyagi" v-on:click="宮城県;"
                ><td>宮城県</td></router-link
              >
              <router-link to="/akita" v-on:click="秋田県;"
                ><td>秋田県</td></router-link
              >
              <router-link to="/yamagata" v-on:click="山形県;"
                ><td>山形県</td></router-link
              >
              <router-link to="/hukushima" v-on:click="福島県;"
                ><td>福島県</td></router-link
              >
            </div>
          </tr>
          <tr>
            <div class="retu">
              <th scope="row">関東地方</th>
              <router-link to="/ibaraki" v-on:click="茨城県;"
                ><td>茨城県</td></router-link
              >
              <router-link to="/tochigi" v-on:click="栃木県;"
                ><td>栃木県</td></router-link
              >
              <router-link to="/gunma" v-on:click="群馬県;"
                ><td>群馬県</td></router-link
              >
              <router-link to="/saitama" v-on:click="埼玉県;"
                ><td>埼玉県</td></router-link
              >
              <router-link to="/chiba" v-on:click="千葉県;"
                ><td>千葉県</td></router-link
              >
              <router-link to="/tokyoto" v-on:click="東京都;"
                ><td>東京都</td></router-link
              >
              <router-link to="/kanagawa" v-on:click="神奈川県;"
                ><td>神奈川県</td></router-link
              >
            </div>
          </tr>
          <tr>
            <div class="retu">
              <th scope="row">中部地方</th>
              <router-link to="/nigata" v-on:click="新潟県;"
                ><td>新潟県</td></router-link
              >
              <router-link to="/toyama" v-on:click="富山県;"
                ><td>富山県</td></router-link
              >
              <router-link to="/ishikawa" v-on:click="石川県;"
                ><td>石川県</td></router-link
              >
              <router-link to="/hukui" v-on:click="福井県;"
                ><td>福井県</td></router-link
              >
              <router-link to="/yamanashi" v-on:click="山梨県;"
                ><td>山梨県</td></router-link
              >
              <router-link to="/nagano" v-on:click="長野県;"
                ><td>長野県</td></router-link
              >
              <router-link to="/gihu" v-on:click="岐阜県;"
                ><td>岐阜県</td></router-link
              >
              <router-link to="/shizuoka" v-on:click="静岡県;"
                ><td>静岡県</td></router-link
              >
              <router-link to="/aichi" v-on:click="愛知県;"
                ><td>愛知県</td></router-link
              >
            </div>
          </tr>
          <tr>
            <div class="retu">
              <th scope="row">近畿地方</th>
              <router-link to="/mie" v-on:click="三重県;"
                ><td>三重県</td></router-link
              >
              <router-link to="/siga" v-on:click="滋賀県;"
                ><td>滋賀県</td></router-link
              >
              <router-link to="/kyoto" v-on:click="京都府;"
                ><td>京都府</td></router-link
              >
              <router-link to="/osaka" v-on:click="大阪府;"
                ><td>大阪府</td></router-link
              >
              <router-link to="/hyogo" v-on:clicke="兵庫県;"
                ><td>兵庫県</td></router-link
              >
              <router-link to="/nara" v-on:click="奈良県;"
                ><td>奈良県</td></router-link
              >
              <router-link to="/wakayama" v-on:click="和歌山県;"
                ><td>和歌山県</td></router-link
              >
            </div>
          </tr>
          <tr>
            <div class="retu">
              <th scope="row">中国地方</th>
              <router-link to="/Show/鳥取県" v-on:click="鳥取県;"
                ><td>鳥取県</td></router-link
              >
              <router-link to="/Show/島根県" v-on:click="島根県;"
                ><td>島根県</td></router-link
              >
              <router-link to="/Show/広島県" v-on:click="広島県;"
                ><td>広島県</td></router-link
              >
              <router-link to="/Show/岡山県" v-on:click="岡山県;"
                ><td>岡山県</td></router-link
              >
              <router-link to="/Show/山口県" v-on:click="山口県;"
                ><td>山口県</td></router-link
              >
            </div>
          </tr>
          <tr>
            <div class="retu">
              <th scope="row">四国地方</th>
              <router-link to="/Show/徳島県" v-on:click.="徳島県;"
                ><td>徳島県</td></router-link
              >
              <router-link to="/Show/香川県" v-on:click="香川県;"
                ><td>香川県</td></router-link
              >
              <router-link to="/Show/愛媛県" v-on:click="愛媛県;"
                ><td>愛媛県</td></router-link
              >
              <router-link to="/Show/高知県" v-on:click="高知県;"
                ><td>高知県</td></router-link
              >
            </div>
          </tr>
          <tr>
            <div class="retu">
              <th scope="row">九州地方</th>
              <router-link to="/Show/福岡県" v-on:click="福岡県;"
                ><td>福岡県</td></router-link
              >
              <router-link to="/Show/佐賀県" v-on:click="佐賀県;"
                ><td>佐賀県</td></router-link
              >
              <router-link to="/Show/長崎県" v-on:click="長崎県;"
                ><td>長崎県</td></router-link
              >
              <router-link to="/Show/熊本県" v-on:click="熊本県;"
                ><td>熊本県</td></router-link
              >
              <router-link to="/Show/大分県" v-on:click="大分県;"
                ><td>大分県</td></router-link
              >
              <router-link to="/Show/宮崎県" v-on:click="宮崎県;"
                ><td>宮崎県</td></router-link
              >
              <router-link to="/Show/鹿児島県" v-on:click="鹿児島県;"
                ><td>鹿児島県</td></router-link
              >
              <router-link to="/Show/沖縄県" v-on:click="沖縄県;"
                ><td>沖縄県</td></router-link
              >
            </div>
          </tr>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  methods: {
    Map() {
      this.$router.push("")
    },
  },
}
</script>

<style scoped>
header {
  margin: 0;
  padding: 0;
  background-color: khaki;
  font-family: serif;
  height: 75px;
  font-size: x-large;
}
body {
  background-color: rgb(193, 192, 189);
  padding: 0;
  margin: 0;
}
#app {
  font-family: serif;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  font-size: x-large;
  background-color: white;
}
.japan_map {
  background: url(~@/assets/download.png);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 600px 500px;
}

.retu {
  display: flex;
  padding: 7px;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td {
  width: 100px;
  vertical-align: top;
}
td,
th {
  border: 1px solid #1e201d;
  background-color: rgba(222, 222, 17, 0.329);
  /* height: 30px; */
  padding: 12px;
  font-weight: 700;
  color: #292929;
}
</style>
