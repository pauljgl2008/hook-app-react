import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del tiempo',
    //     done: false
    // }
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

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

    return (
        <>
            <h1>TodoApp: 10 <small>pendientes: 2 </small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/*TodoList */}
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handledDeteleTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                    {/**Fin TodoList */}
                </div>
                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />
                    {/**TodoAdd onNewTodo*/}
                    {/**{id: new Date()..., description;'', done: false} */}
                    <TodoAdd
                        onNewTodo={handledNewTodo}
                    />
                    {/**Fin TodoAdd */}
                </div>
            </div>
        </>
    )
}
