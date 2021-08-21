
const getPokemons = () => {

    // crear arreglo de 650 elementos
    const pokemonsArr = Array.from(Array(650))

    // colocar el valor de cada elemento
    return pokemonsArr.map( (_,index) => index+1 )

}

const getPokemonOptions = () => {

    // ordenar de forma aleatoria los elementos
    const mixedPokemons = getPokemons()
        .sort(() => Math.random() - 0.5)
    
    // pasar solo los primeros 4 a la funcion
    getPokemonNames(mixedPokemons.splice(0,4))

}

const getPokemonNames = ([ a,b,c,d] = []) => {
    console.log(a,b,c,d)
}

export default getPokemonOptions