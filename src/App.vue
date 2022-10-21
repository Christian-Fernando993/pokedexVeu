<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style>
*{
    box-sizing: border-box;
}
body,
ul,
li,
h1,
h2 p {
  padding: 0;
  margin: 0;
}

ul{
    list-style: none;
}

body{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #345;
    background: url('./assets/pattern.svg') repeat top;
}

a{
    color: #345;
    text-decoration: none;
    list-style: none;
}

img{
    max-width: 100%;
    display: block;
}

#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}
</style>