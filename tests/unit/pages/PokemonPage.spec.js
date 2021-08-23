import {shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage component', () => {
    
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de llamar mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const  wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        
        // montar el componentes con los datos en data()
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon : false,
                    showAnswer : false,
                    message: ''
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon : false,
                    showAnswer : false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')
        
        // PokemonPicture debe existir
        expect(picture.exists()).toBeTruthy()

        // PokemonOptions debe existir
        expect(options.exists()).toBeTruthy()

        // PokemonPicture attribute pokemonid = 1
        expect(picture.attributes('pokemonid')).toBe('1')
        
        // PokemonOptions attribute pokemons
        expect(options.attributes('pokemons')).toBeTruthy()

    })

    test('pruebas con checkanswer',async () => {
      
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon : false,
                    showAnswer : false,
                    message: ''
                }
            }
        })

        // ejecutar la funcion checkAnswer
        await wrapper.vm.checkAnswer(1)
        
        expect(wrapper.find('h2').exists()).toBeTruthy()
        
        // evaluar la variable showPokemon sea true despues de la funcion
        expect(wrapper.vm.showPokemon).toBeTruthy()

        // evaluar el mensaje despues de la ejecucion de funcion
        expect(wrapper.find('h2').text()).toBe(`Correcto, ${pokemons[0].name}`)

         // ejecutar la funcion checkAnswer
        await wrapper.vm.checkAnswer(5)
        // evaluar el mensaje despues de la ejecucion de funcion
        expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[0].name}`)

    })

})
