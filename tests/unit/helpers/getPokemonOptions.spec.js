import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
    
    test('debe de regresar un arreglo de numeros', () => {
        
        const pokemons = getPokemons()

        // verificar que el arreglo sea de 650 posiciones de acuerdo a lo declarado
        expect(pokemons.length).toBe(650)
        // verificar que sea numero y el esperado de acuerdo a la posicion
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)

    })

    test('debe de retornar un arreglo de 4 elementos con nombres de pokemons', async () => {

        const pokemonNames = await getPokemonNames([1,2,3,4])

        // construir respuesta esperada
        const respuesta = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]

        // evaluar los valores de los array, no usar toBe
        expect(pokemonNames).toStrictEqual(respuesta)
            
    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', async () => {
        
        const pokemons = await getPokemonOptions()

        // evaluar la cantidad de elememtos en el arreglo
        expect(pokemons.length).toBe(4)

        // evaluar los tipos de datos de los 4 elementos
        expect(pokemons).toEqual([
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])
        
    })
    
})
