const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    if (type === 'NEWNAME') {
        return [
            ...state,
            action.value
        ]
    }
    // Add a Name Tag
    return state;
}