// importar las acciones

import {
  GET_POKEMONES,
  CREATE_POKEMON,
  GET_NAME,
  GET_DETAILS,
  FILTER_TYPE,
  GET_TYPES,
  FILTER_API_DB,
  ORDER_A_Z,
} from "./actions";

let initialState = {
  pokemones: [],
  allPokemons: [],
  detail: [],
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONES:
      return {
        ...state,
        pokemones: action.payload,
        allPokemons: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case FILTER_TYPE:
      let allPokemons = state.allPokemons;
      let pokeFilt =
        action.payload === "All"
          ? allPokemons
          : allPokemons.filter((cur) => cur.types.includes(action.payload));

      return {
        ...state,
        pokemones: pokeFilt,
      };
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        pokemones: action.payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
        pokemones: [...state.pokemones, action.payload],
      };
    case ORDER_A_Z:
      let ordName = [...state.allPokemons];
      let pokeByName =
        action.payload === "asc"
          ? ordName.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else {
                return 0;
              }
            })
          : ordName.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        pokemones: pokeByName,
      };

    case FILTER_API_DB:
      let aux = [...state.allPokemons];
      return {
        ...state,
        pokemones:
          action.payload === "allPoke"
            ? state.allPokemons
            : action.payload === "dbPoke"
            ? aux.filter((c) => isNaN(c.id))
            : aux.filter((c) => !isNaN(c.id)),
      };
    default:
      return state;
  }
}
