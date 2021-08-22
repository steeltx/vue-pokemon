import pokemonApi from '../api/pokemonApi'

export const getPokemons = () => {

    // crear arreglo de 650 elementos
    const pokemonsArr = Array.from(Array(650))

    // colocar el valor de cada elemento
    return pokemonsArr.map( (_,index) => index+1 )

}

const getPokemonOptions = async () => {

    // ordenar de forma aleatoria los elementos
    const mixedPokemons = getPokemons()
        .sort(() => Math.random() - 0.5)
    
    // pasar solo los primeros 4 a la funcion
    const pokemons = await getPokemonNames(mixedPokemons.splice(0,4))

    return pokemons

}

export const getPokemonNames = async ([ a,b,c,d] = []) => {

    // generación del arreglo con las 4 peticiones
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    // realizar todas las peticiones
    const [p1, p2, p3, p4] = await Promise.all(promiseArr)
    
    // generar objeto de regreso
    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]
}

export default getPokemonOptions