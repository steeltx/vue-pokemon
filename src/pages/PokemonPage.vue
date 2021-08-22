<template>
    <h1>¿Quién es este pokémon?</h1>

    <!-- IMG -->
    <PokemonPicture :pokemonId="4" :showPokemon="true" />

    <!-- Opciones -->
    <PokemonOptions :pokemons="pokemonArr" />

</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log(getPokemonOptions())

export default {
    components:{
        PokemonPicture,
        PokemonOptions
    },
    data(){
        return{
           pokemonArr: [] 
        }
    },
    methods:{
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
        }
    },
    mounted(){
        this.mixPokemonArray()
    }

}
</script>
