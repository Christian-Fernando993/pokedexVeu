<template>
  <section class="pokemon-container">
    <div v-if="pokemons && pokemons.length" class="pokemons">
      <div class="pokemon" v-for="pokemon in pokemons" :key="pokemon">
          <h3>{{ pokemon }}</h3>
      </div>
    </div>
    <div v-else-if="pokemons && pokemons.length === 0">
      <p>Pokémon não encontrado</p>
    </div>
  </section>
</template>

<script>
import { apiAxios } from "../services/api.js";
import { serialize } from "../helpers.js";

export default {
  name: 'PokemonListar',
  data() {
    return {
      pokemons: null,
      pokemonsPorPagina: 8,
    };
  },
  computed: {
    url() {
      const  query= serialize(this.$route);
      return `/pokemon?_limit=${this.pokemonsPorPagina}${query}`;
    }
  },  
  methods: {
    getPokemons() {
      apiAxios.get(this.url).then(response => {
        this.pokemons = response.data.results;
        console.log(response.data.results);
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
  }
};
</script>

<style scoped>
.pokemons-container {
  max-width: 1000px;
  margin: 0 auto;
}
.pokemons {
  display: auto;
  grid-template-columns: (3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}
.pokemon {
  box-shadow: 0 4px 8px rgba(30, 60, 90 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.pokemon:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  /* transform: scale(1.1); */
  position: relative;
  z-index: 1;
}
</style>