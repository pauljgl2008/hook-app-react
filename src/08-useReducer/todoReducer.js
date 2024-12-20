export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case 'ADD':
            return [...initialState, action.payload]
        case 'REMOVE':
            return initialState.filter(todo => todo.id !== action.payload)
        // throw new Error('Action.type = ABC no está implementada');
        case 'TOGGLE':
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            return initialState;
    }
}