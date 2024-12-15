import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        // ToooItem...
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDeleteTodo={onDeleteTodo}
                            onToggleTodo={onToggleTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}