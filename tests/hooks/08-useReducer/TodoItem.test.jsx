import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => {
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    
    beforeEach(() => jest.clearAllMocks());
    
    test('debe de mostrar el Todo Pendiente de completar', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
            />
        );
        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');

        expect(liElement.className).toBe("list-group-item d-flex justify-content-between")
        expect(spanElement.className).toContain("align-self-center")
    })
})