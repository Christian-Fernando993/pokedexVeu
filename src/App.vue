<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <Home/>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Home from "./views/Home.vue"

export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter,
    Home,
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

input, textarea{
  border-radius: 4px;
  border: none;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
}

input:hover,
input:focus,
textarea:hover
textarea:focus{
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
}
</style>