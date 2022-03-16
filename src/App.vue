<template>
  <header class="header">
    <div class="header__titles">
      <img src="@/assets/logo.png" alt="vue logo" width="50" height="50" />
    </div>
    <nav class="navigation">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/postform">投稿ページ</router-link>|
      <router-link to="/browsingpage">閲覧ページ</router-link>
    </nav>
  </header>
  <main class="main-view">
    <router-view />
  </main>
</template>

<script></script>
