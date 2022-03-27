<template>
  <div>
    <div class="nav__bar">
      <div class="tittle__logo">カクテル・地酒紹介</div>

      <div class="nav__items">
        <router-link to="/home" class="nav__item nav__link">Home</router-link>
        <router-link to="/mypage" class="nav__item nav__link"
          >MyPage</router-link
        >
        <router-link to="/logout" class="nav__item nav__link">
          logout</router-link
        >
        <router-link to="/cocktail_browsing" class="nav__item nav__link"
          >カクテル紹介</router-link
        >
        <router-link to="/cocktail_postform" class="nav__item nav__link"
          >カクテル投稿</router-link
        >
        <router-link to="/browsingpage/:id" class="nav__item nav__link"
          >地酒紹介</router-link
        >
        <router-link to="/postform" class="nav__item nav__link"
          >地酒投稿</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.nav__bar {
  padding: 0;
  margin: 0;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border: solid 3px #000000;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  box-sizing: border-box;
}
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #eee;
  text-decoration: none;
}
.nav__link:visited {
  color: #eee;
}
.nav__link:hover {
  font-weight: bold;
  color: #fff;
}
.tittle__logo {
  display: flex;
  align-items: center;
  font-size: xx-large;
  padding-left: 3%;
  color: #fff;
}
.nav__items {
  display: flex;
}
.nav__item {
  width: 160px;
  border-left: 3px solid rgb(0, 0, 0);
  font-size: large;
}
</style>
