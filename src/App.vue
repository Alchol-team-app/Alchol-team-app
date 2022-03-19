<template>
  <header class="header">
    <div class="header__titles">
      <img src="@/assets/logo.png" alt="vue logo" width="50" height="50" />
    </div>
    <nav class="navigation">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/postform">地酒投稿ページ</router-link>|
      <router-link to="/browsingpage">地酒閲覧ページ</router-link>|
      <router-link to="/cocktail_postform">カクテル投稿ページ</router-link>
      |<router-link to="/cocktail_browsing">カクテル閲覧ページ</router-link
      >|<router-link to="/login">Login</router-link>
    </nav>
  </header>

  <router-view />
</template>

<script></script>
