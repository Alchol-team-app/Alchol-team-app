<template>
  <div>
    <div class="nav__bar">
      <div class="tittle__logo">~カクテル・地酒紹介~</div>
      <div class="nav__items">
        <router-link to="/" class="nav__item nav__link">Home</router-link>
        <router-link to="/my-page" class="nav__item nav__link"
          >MyPage</router-link
        >
        <router-link to="/log-in" class="nav__item nav__link">
          LogIn</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.nav__bar {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: rgb(4, 80, 157);
  border: solid 3px #000000;
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

  font-size: xx-large;
  padding-left: 40%;
  color: #fff;
}
.nav__items {
  display: flex;
}
.nav__item {
  width: 100px;
  border-left: 1px solid rgb(0, 0, 0);
}
</style>
