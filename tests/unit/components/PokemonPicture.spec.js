import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => {
    
    test('debe de hacer match con el snapshot', () => {
        
        // llamar al componente pasando las propiedades necesarias
        const wrapper = shallowMount(PokemonPicture,{
            props: {
                pokemonId : 1,
                showPokemon : false
            }
        })

        expect(wrapper.html()).toMatchSnapshot() 

    })

    test('debe de mostrar la imagen oculta y el pokemon 100', () => {
        
        const wrapper = shallowMount(PokemonPicture,{
            props:{
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        // verificar que la img1 exista
        expect(img1.exists()).toBeTruthy()

        // verificar que la img2 no exista, ya que se pasa showPokemon false
        expect(img2).toBeUndefined()

        // verificar que la imagen tenga la clase correspondiente
        expect(img1.classes('hidden-pokemon')).toBeTruthy()

        // verificar el atributo src de la imagen
        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');

    })

    test('debe de mostrar el pokemon si showPokemon:true', () => {
        
        const wrapper = shallowMount(PokemonPicture,{
            props:{
                pokemonId: 100,
                showPokemon: true
            }
        })

        const img1 = wrapper.find('img')

        // verificar que la img1 exista
        expect(img1.exists()).toBeTruthy()

        // verificar que la imagen tenga la clase correspondiente
        expect(img1.classes('hidden-pokemon')).toBe(false)
        expect(img1.classes('fade-in')).toBe(true)

    })
    
})
