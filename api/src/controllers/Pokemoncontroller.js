const { Pokemon, Type } = require("../db.js");
const axios = require("axios");

let getPokemonApi = async () => {
  const url = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60");
  let url2 = url.data.results.map((p) => axios.get(p.url));
  let info = [];

  let results = await axios.all(url2).then((poke) => {
    poke.map((p) => {
      info.push({
        id: p.data.id,
        name: p.data.name,
        img: p.data.sprites.other.dream_world.front_default,
        hp: p.data.stats[0].base_stat ? p.data.stats[0].base_stat : "",
        attack: p.data.stats[1].base_stat ? p.data.stats[1].base_stat : "",
        defense: p.data.stats[2].base_stat ? p.data.stats[2].base_stat : "",
        speed: p.data.stats[5].base_stat ? p.data.stats[5].base_stat : "",
        height: p.data.height ? p.data.height : "",
        weight: p.data.weight ? p.data.weight : "",
        types: p.data.types.map((p) => p.type.name)
          ? p.data.types.map((p) => p.type.name)
          : "",
        
      });
    });
    return info;
  });
  return results;
};



let getPokemonBd = async () => {

  let pokeDb = await Pokemon.findAll({
    include:[{
        model: Type,
        attributes: ['name'],
        through:{
            attributes: []
        }
    }]
})

let pokeTMap = pokeDb.map(p => {
    return{
        id: p.id,
        name: p.name,
        height: p.height,
        weight: p.weight,
        hp: p.hp,
        attack: p.attack,
        defense: p.defense,
        speed: p.speed,
        img: p.img,
        types: p.types.map(curr => curr.name)
    }
})
 
return pokeTMap


};



let getAllPokemons = async (name) => {
  try {
    let [api, bd] = await Promise.all([getPokemonApi(), getPokemonBd()]);

    let infoTotal = [...bd, ...api];
    //si recibo un nombre por query entra en el if y filtro ese nombre sino devuelvo todos los Pokemons
    if (name) {
      let pokemonName = infoTotal.filter((el) => {
        return el.name.toLowerCase().includes(name.toLowerCase());
      });
      return pokemonName;
    } else {
      return infoTotal;
    }
  } catch (e) {
    console.log("ERROR en getPokemons: " + e);
  }
};

module.exports = {
  getPokemonApi,
  getPokemonApi,
  getAllPokemons,
};
