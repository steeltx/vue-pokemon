<template>

    <h1 v-if="!pokemon">Espere por favor ...</h1>

    <div v-else>
        
        <h1>¿Quién es este pokémon?</h1>

        <!-- IMG -->
        <PokemonPicture 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon"
        />

        <!-- Opciones -->
        <PokemonOptions 
            :pokemons="pokemonArr" 
            @selection="checkAnswer"
        />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{message}}</h2>
            <button @click="newGame">Nuevo juego</button>
        </template>

    </div>
   
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
           pokemonArr: [],
           pokemon: null,
           showPokemon : false,
           showAnswer : false,
           message: ''
        }
    },
    methods:{
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        // ejecutar funcion al ser emitida desde componente hijo
        checkAnswer(selectecId){
            this.showPokemon = true
            this.showAnswer = true
            if(selectecId === this.pokemon.id){
                this.message =  `Correcto, ${this.pokemon.name}`
            }else{
                this.message = `Oops, era ${this.pokemon.name}`
            }
        },
        newGame(){
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted(){
        this.mixPokemonArray()
    }

}
</script>
