const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION 1 - Increment height by 10
    // ACTION 2 - Increment width by 10
    if (type === "ADD") {
        if (action.value === 'height') {
            return {
                width: state.width,
                height: state.height + 10,
                color: state.color
            }
        } else if (action.value === 'width') {
        return {
            width: state.width + 10,
            height: state.height,
            color: state.color
            }
        } 
        // ACTION 3 - Change the color
    } else if (type === "COLOR") {
            return {
                width: state.width,
                height: state.height,
                color: state.color = action.value
            }
        }
    
    return state;
}