<template>
    <h1>¿Quién es este pokémon?</h1>

    <!-- IMG -->
    <PokemonPicture />

    <!-- Opciones -->
    <PokemonOptions />

</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

export default {
    components:{
        PokemonPicture,
        PokemonOptions
    }

}
</script>
