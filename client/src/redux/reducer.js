// importar las acciones

let initialState = {
    pokemones : [],
    detail : [],
    types: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_POKEMONES":
            return {
                ...state, 
                pokemones: action.payload
            }
            case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
      case "GET_DETAILS":
        return {
            ...state,
            detail: action.payload
        }
        default:
            return state
    }
}