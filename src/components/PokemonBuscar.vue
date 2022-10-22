<template>
  <form>
    <input name="busca" id="busca" type="text" v-model="busca" placeholder="Buscar Pokemon..." />
    <input type="button" id="lupa" value="buscar" @click="pokemonBuscar" />
  </form>
</template>

<script>
export default {
  name: "PokemonBuscar",
  data() {
    return {
      busca: "",
    };
  },
  emits: ["update:pokemon"],
  props: {
    pokemon: String,
  },
  methods: {
    pokemonBuscar() {
      this.$emit("update:pokemon", this.busca);
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 4px;
}

#busca:focus,
busca:hover {
  transform: scale(1.1);
  border: none;
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>