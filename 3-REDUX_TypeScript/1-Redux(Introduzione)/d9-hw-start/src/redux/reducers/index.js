const initialState = {
    main: {
        favourites: []
    }
}


const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD":
            return {
                ...state,
                main: {
                    ...state.main,
                    favourites: [...state.main.favourites, action.payload]
                }
            }
        case "REMOVE":
            return {
                ...state,
                main: {
                    ...state.main,
                    favourites: state.main.favourites.filter((f) => f !== action.payload)
                }
            }
        default:
            return state
    }
}

export default mainReducer;