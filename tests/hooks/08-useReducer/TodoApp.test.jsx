import { screen } from '@testing-library/dom'
import { TodoApp } from '../../../src/08-useReducer/TodoApp'
import { useTodos } from '../../../src/hooks/useTodos'
import { render } from '@testing-library/react'

jest.mock('../../../src/hooks/useTodos')

describe('Pruebas en <TodoApp />', () => {

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'todo 1', done: false },
            { id: 2, description: 'todo 2', done: true }
        ],
        todosCoun: 2,
        pendingTodosCount: 1,
        handledDeteleTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handledNewTodo: jest.fn()
    })

    test('debbe de mostrar el componente correctamente', () => {
        render(<TodoApp />)
        // screen.debug();
        expect(screen.getByText('todo 1')).toBeTruthy()
        expect(screen.getByText('todo 2')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
    })
})