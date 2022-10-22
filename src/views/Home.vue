<template>
    <section>
        <h1>Pesquisar Pokémon</h1>
        <h1>{{pokemon}}</h1>
        <PokemonListar/>
        <PokemonBuscar :pokemon="pokemon" @onSearch="onSearch"/>
    </section>
</template>

<script>
import PokemonBuscar from "../components/PokemonListar.vue";
import PokemonListar from "../components/PokemonBuscar.vue";
export default{
    name: "home",
    data() {

    },
    components:{
        PokemonBuscar,
        PokemonListar,
    },
    created(){
        console.log(this.$route)
    },
    methods: {
        onSearch(pokemon){
            console.log('Ola = ')
            console.log(this.pokemon)
        }
    }
};
</script>

<style scoped>
h1{
    color: #87f;
    margin-top: 40px;
    font-size: 2rem;
    text-align: center;
}
</style>