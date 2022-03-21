<!-- <template>
  <div class="japan_map">
    <Header />
    <div class="japan_graph">
      <tr1>
        <div class="retu">
          <th scope="row">北海道</th>
          <router-link to="/Show/北海道" v-on:click.native="北海道;"
            ><td>北海道</td></router-link
          >
        </div>
      </tr1>
      <tr>
        <div class="retu">
          <th scope="row">東北地方</th>
          <router-link to="/Show/青森県" v-on:click.native="青森県;"
            ><td>青森県</td></router-link
          >
          <router-link to="/Show/岩手県" v-on:click.native="岩手県;"
            ><td>岩手県</td></router-link
          >
          <router-link to="/Show/宮城県" v-on:click.native="宮城県;"
            ><td>宮城県</td></router-link
          >
          <router-link to="/Show/秋田県" v-on:click.native="秋田県;"
            ><td>秋田県</td></router-link
          >
          <router-link to="/Show/山形県" v-on:click.native="山形県;"
            ><td>山形県</td></router-link
          >
          <router-link to="/Show/福島県" v-on:click.native="福島県;"
            ><td>福島県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">関東地方</th>
          <router-link to="/Show/茨城県" v-on:click.native="茨城県;"
            ><td>茨城県</td></router-link
          >
          <router-link to="/Show/栃木県" v-on:click.native="栃木県;"
            ><td>栃木県</td></router-link
          >
          <router-link to="/Show/群馬県" v-on:click.native="群馬県;"
            ><td>群馬県</td></router-link
          >
          <router-link to="/Show/埼玉県" v-on:click.native="埼玉県;"
            ><td>埼玉県</td></router-link
          >
          <router-link to="/Show/千葉県" v-on:click.native="千葉県;"
            ><td>千葉県</td></router-link
          >
          <router-link to="/Show/東京都" v-on:click.native="東京都;"
            ><td>東京都</td></router-link
          >
          <router-link to="/Show/神奈川県" v-on:click.native="神奈川県;"
            ><td>神奈川県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">中部地方</th>
          <router-link to="/Show/新潟県" v-on:click.native="新潟県;"
            ><td>新潟県</td></router-link
          >
          <router-link to="/Show/富山県" v-on:click.native="富山県;"
            ><td>富山県</td></router-link
          >
          <router-link to="/Show/石川県" v-on:click.native="石川県;"
            ><td>石川県</td></router-link
          >
          <router-link to="/Show/福井県" v-on:click.native="福井県;"
            ><td>福井県</td></router-link
          >
          <router-link to="/Show/山梨県" v-on:click.native="山梨県;"
            ><td>山梨県</td></router-link
          >
          <router-link to="/Show/長野県" v-on:click.native="長野県;"
            ><td>長野県</td></router-link
          >
          <router-link to="/Show/岐阜県" v-on:click.native="岐阜県;"
            ><td>岐阜県</td></router-link
          >
          <router-link to="/Show/静岡県" v-on:click.native="静岡県;"
            ><td>静岡県</td></router-link
          >
          <router-link to="/Show/愛知県" v-on:click.native="愛知県;"
            ><td>愛知県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">近畿地方</th>
          <router-link to="/Show/三重県" v-on:click.native="三重県;"
            ><td>三重県</td></router-link
          >
          <router-link to="/Show/滋賀県" v-on:click.native="滋賀県;"
            ><td>滋賀県</td></router-link
          >
          <router-link to="/Show/京都府" v-on:click.native="京都府;"
            ><td>京都府</td></router-link
          >
          <router-link to="/Show/大阪府" v-on:click.native="大阪府;"
            ><td>大阪府</td></router-link
          >
          <router-link to="/Show/兵庫県" v-on:click.native="兵庫県;"
            ><td>兵庫県</td></router-link
          >
          <router-link to="/Show/奈良県" v-on:click.native="奈良県;"
            ><td>奈良県</td></router-link
          >
          <router-link to="/Show/和歌山県" v-on:click.native="和歌山県;"
            ><td>和歌山県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">中国地方</th>
          <router-link to="/Show/鳥取県" v-on:click.native="鳥取県;"
            ><td>鳥取県</td></router-link
          >
          <router-link to="/Show/島根県" v-on:click.native="島根県;"
            ><td>島根県</td></router-link
          >
          <router-link to="/Show/広島県" v-on:click.native="広島県;"
            ><td>広島県</td></router-link
          >
          <router-link to="/Show/岡山県" v-on:click.native="岡山県;"
            ><td>岡山県</td></router-link
          >
          <router-link to="/Show/山口県" v-on:click.native="山口県;"
            ><td>山口県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">四国地方</th>
          <router-link to="/Show/徳島県" v-on:click.native="徳島県;"
            ><td>徳島県</td></router-link
          >
          <router-link to="/Show/香川県" v-on:click.native="香川県;"
            ><td>香川県</td></router-link
          >
          <router-link to="/Show/愛媛県" v-on:click.native="愛媛県;"
            ><td>愛媛県</td></router-link
          >
          <router-link to="/Show/高知県" v-on:click.native="高知県;"
            ><td>高知県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">九州地方</th>
          <router-link to="/Show/福岡県" v-on:click.native="福岡県;"
            ><td>福岡県</td></router-link
          >
          <router-link to="/Show/佐賀県" v-on:click.native="佐賀県;"
            ><td>佐賀県</td></router-link
          >
          <router-link to="/Show/長崎県" v-on:click.native="長崎県;"
            ><td>長崎県</td></router-link
          >
          <router-link to="/Show/熊本県" v-on:click.native="熊本県;"
            ><td>熊本県</td></router-link
          >
          <router-link to="/Show/大分県" v-on:click.native="大分県;"
            ><td>大分県</td></router-link
          >
          <router-link to="/Show/宮崎県" v-on:click.native="宮崎県;"
            ><td>宮崎県</td></router-link
          >
          <router-link to="/Show/鹿児島県" v-on:click.native="鹿児島県;"
            ><td>鹿児島県</td></router-link
          >
          <router-link to="/Show/沖縄県" v-on:click.native="沖縄県;"
            ><td>沖縄県</td></router-link
          >
        </div>
      </tr>
    </div>
  </div>
</template> -->
