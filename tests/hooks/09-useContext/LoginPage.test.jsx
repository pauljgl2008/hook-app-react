import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/09-useContext/LoginPage"
import { UserContext } from "../../../src/09-useContext/context/UserContext"

describe('Pruebas en <LoginPage />', () => {
    const user = {
        id: 123,
        name: 'Paúl',
        email: 'paul@gmail.com'
    }

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: user }}>
                <LoginPage />
            </UserContext.Provider>)
        screen.debug()
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
    });
    test('debe de llamar al setUser cuando se hace click en el boton', () => {
        const setUserMock = jest.fn()
        render(
            <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>)
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith(user)
    });
})