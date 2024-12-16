import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks"
import { useFetch, useCounter } from "../../../src/hooks"

jest.mock('../../../src/hooks/useFetch')
jest.mock('../../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Siguiente' })
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('MultipleCustomHooks'))
        expect(nextButton.disabled).toBeFalsy()
        // screen.debug();
    })

    test('debe de mostrar un pokemon', () => {
        useFetch.mockReturnValue({
            data:
            {
                id: 123,
                name: 'pikachu',
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                    front_shiny: null,
                    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
                }
            },
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />);
        expect(screen.getByText("#123 - pikachu")).toBeTruthy()
        const nextButton = screen.getByRole('button', { name: 'Siguiente' })
        expect(nextButton.disabled).toBeFalsy()
    });

    test('debe de llamar a la función de incrementar', () => {
        useFetch.mockReturnValue({
            data:
            {
                id: 1,
                name: 'pikachu',
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                    front_shiny: null,
                    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
                }
            },
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Siguiente' })
        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled();
    })
})