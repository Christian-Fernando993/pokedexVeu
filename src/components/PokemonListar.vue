<template>
  <section class="pokemon-container">
    <div v-for="pokemons in pokemons" :key="pokemons.id">
        <img :src="pokemons.foto">
        <h2 class="titulo">{{pokemons.nome}}</h2>
    </div>
  </section>
</template>

<script>
import {serialize} from "../helpers.js"
import {api} from "../services/api.js";
export default {
  data() {
    return {
      pokemons: null,
      pokemonsPorPagina: 9
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query)
      return `/produto?_limit=${this.pokemonsPorPagina}${query}`; 
    }
  },  
  methods: {
    getPokemons() {
      api.get(this.url).then(response => {
        this.pokemons = response.data;
      })
    }
  },
  watch: {
    url() {
      this.getPokemons();
    }
  },
  created() {
    this.getPokemons();
  },
};
</script>

<style>
</style>