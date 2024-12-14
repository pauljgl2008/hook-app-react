export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case 'ADD':
            return [...initialState, action.payload]
        // throw new Error('Action.type = ABC no está implementada');
        default:
            return initialState;
    }
}