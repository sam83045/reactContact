const addContact = data => {
    return {
        type: 'ADD_SINGLE',
        data
    }
};
const addContacts = data => {
    return {
        type: 'ADD_MULTIPLE',
        data
    }
};

const editContact = data => {
    return {
        type: "EDIT",
        data
    }
}

export { addContact, addContacts, editContact };