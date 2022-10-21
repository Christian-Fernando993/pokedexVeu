<template>
    <form>
        <input name="busca" id="busca" type="text" v-model="busca">
        <input type="submit" id="lupa" value="Buscar" @click.prevent="pokemonBuscar">
        {{busca}}

    </form>
</template>

<script>
export default{
    data() {
        return {
            busca: ""
        }
    },
    methods: {
        pokemonBuscar() {
            this.$router.push({query: {pokemon: this.busca}})
        }
    }

}
</script>

<style>
</style>