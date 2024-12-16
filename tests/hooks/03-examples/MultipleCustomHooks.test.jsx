import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks"

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('debe de mostrar el componente por defecto', () => {
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Siguiente'})
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('MultipleCustomHooks'))
        expect(nextButton.disabled).toBeFalsy()
        // screen.debug();
    })
})