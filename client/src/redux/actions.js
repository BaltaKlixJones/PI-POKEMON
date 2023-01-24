import axios from "axios";


// ruta para traer los pokemones haciendo el pedido a la api
export const getPokemones = () => {
  return async (dispatch) => {
    let pedidoApi = await axios.get("http://localhost:3001/pokemons/");
    dispatch({ type: "GET_POKEMONES", payload: pedidoApi.data });
  };
};

export const filterPokemonesbyType = (payload)=>{
    return {
        type: "FILTER_BY_TYPE",
        payload
    }
}

export const filterCreated = (payload)=>{
    return {
        type: "FILTER_CREATED",
        payload
    }
}

export function getTypes() {
    return async function (dispatch) {
      let type = await axios.get("http://localhost:3001/types");
      return dispatch({ type: "GET_TYPES", payload: type.data });
    };
  }


export function postPokemon(payload) {
    return async function (dispatch) {
      let url = await axios.post("http://localhost:3001/pokemons", payload);
      //console.log(json);
      return url;
    };
  }


export function getDetail(id) {
    return async function (dispatch) {
      try {
        let url = await axios.get("http://localhost:3001/pokemons/" + id);
        return dispatch({
          type: "GET_DETAILS",
          payload: url.data,
        });
      } catch (err) {
        console.log(err);
      }
    };
  }

  export function getNamePoke(payload){
    return async function (dispatch) {
      try {
        let url = await axios.get(
          `http://localhost:3001/pokemons?name=${payload}`
        );
        return dispatch({
          type: "GET_NAME",
          payload: url.data
        })
      } catch (error) {
        console.log(error);
      }
    }
  }

// ruta para crear un personaje 
export const createPokemons = () => {
  return async (dispatch) => {};
};
