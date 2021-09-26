<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/demo1">Demo1</router-link> |
      <router-link to="/demo2">Demo2</router-link> |
      <router-link to="/demo3">Demo3</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
$border: 2px solid
  rgba(
    $color: white,
    $alpha: 0.35,
  );
$size1: 6px;
$size2: 12px;
$size3: 18px;
$size4: 24px;
$size5: 48px;
$backgroundColor: #27292d;
$textColor: white;
$primaryColor: #a0a4d9;
$secondTextColor: #1f2023;
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #27292d;
  color: #ffffff;
}
</style>
<style lang="scss" scoped>
#app {
  text-align: center;
  #nav {
    padding: 30px;

    a {
      font-size: 20px;
      font-weight: bold;
      color: #dbdbdb;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
