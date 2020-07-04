const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SINGLE':
            return [...state, action.data]
        case 'ADD_MULTIPLE':
            return [...state, ...action.data]
        case "EDIT": {
            const newList = state.splice(action.data.id, 1, action.data);
            return newList;
        }
        default: return state
    }
}

export default contactsReducer;