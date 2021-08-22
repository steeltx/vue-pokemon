import pokemonApi from '@/api/pokemonApi'

describe('pokemonAPI', () => {
    
    test('axios debe de estar configurado con el api de pokemon', () => {

        // revisar que la url de consulta este correcta
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')

    })
    
})
