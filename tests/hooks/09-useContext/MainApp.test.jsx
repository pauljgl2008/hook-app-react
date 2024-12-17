import { fireEvent, render, screen } from "@testing-library/react"
import { MainApp } from "../../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <MainApp />', () => {
    const user = {
        id: 123,
        name: 'Paúl',
        email: 'paul@gmail.com'
    }

    test('debe de mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )
        expect(screen.getByText('Home Page')).toBeTruthy()
        // screen.debug()
    });
    test('debe de mostrar el Login', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )
        expect(screen.getByText('Login Page')).toBeTruthy()
        screen.debug()
    });
})