import axios from "axios";

export const GET_POKEMONES = 'GET_POKEMONES' 
export const GET_NAME = 'GET_NAME'
export const GET_TYPES = 'GET_TYPES'
export const CREATE_POKEMON = 'CREATE_POKEMON'
export const GET_DETAILS = 'GET_DETAILS'
export const FILTER_TYPE = 'FILTER_TYPE'
export const ORDER_A_Z = 'ORDER_A_Z'
export const FILTER_API_DB = "FILTER_API_DB"
export const FILTER_ATTACK = "FILTER_ATTACK";
export const DELETE = "DELETE"





export const getPokemones = () => {
  return async (dispatch) => {
    let pedidoApi = await axios.get("http://localhost:3001/pokemons/");
   return dispatch({ 
      type: "GET_POKEMONES",
     payload: pedidoApi.data });
  };
};



export function getDetail(id) {
    return async function (dispatch) {
      
        let url = await axios.get("http://localhost:3001/pokemons/" + id);
        return dispatch({
          type: "GET_DETAILS",
          payload: url.data,
        });
    };
  }

  export function getNamePoke(name){
    return async function (dispatch) {
     
        let url = await axios.get(
          `http://localhost:3001/pokemons?name=${name}`
        );
        return dispatch({
          type: "GET_NAME",
          payload: url.data
        })
    }
  }

  export const createPoke = (pokemon) => {
    return async (dispatch) => {
      var response = await axios.post("http://localhost:3001/pokemons/create", pokemon)
      return dispatch({
        type: "CREATE_POKEMON",
       response
      })
    };
  };

  export function getTypes() {
      return async function (dispatch) {
        let type = await axios.get("http://localhost:3001/pokemons/types");
        return dispatch({ 
          type: "GET_TYPES", 
          payload: type.data });
      };
    }

export const filterPokemonesbyType = (payload)=>{
    return {
        type: "FILTER_TYPE",
        payload
    }
}

export const orderA_Z = (payload) => {
  return {
    type: 'ORDER_A_Z',
    payload
  }
}

export function creApiFilt(payload){
  return {
      type: 'FILTER_API_DB',
      payload
  }
}



export function filterAttack(payload) {
  return{
    type: "FILTER_ATTACK",
    payload
  }
}


export function deletePoke(id) {
  return async function (dispatch) {
    let url = await axios.delete("http://localhost:3001/pokemons/delete/" + id)
    return {
      type: "DELETE",
      url
    }
  }
}








