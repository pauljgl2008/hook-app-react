import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handledNewTodo = (todo) => {
        const action = {
            type: 'ADD',
            payload: todo
        }
        dispatch(action);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handledDeteleTodo = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: 'TOGGLE',
            payload: id
        })
    }

    return {
        todos,
        handledNewTodo,
        handledDeteleTodo,
        handleToggleTodo
    }
}
