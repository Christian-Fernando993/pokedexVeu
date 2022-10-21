<template>
    <section>
        <h1>Pesquisar Pokemon</h1>
        <PokemonBuscar/>
        <PokemonListar/>
    </section>
</template>

<script>
import PokemonBuscar from "../components/PokemonListar.vue";
import PokemonListar from "../components/PokemonBuscar.vue";

export default{
    name: "home",
    components:{
        PokemonBuscar,
        PokemonListar
    }
};
</script>

<style scoped>
h1{
    font-size: 2rem;
    color: #87f;
    margin-top: 40px;
    text-align: top;
}
</style>