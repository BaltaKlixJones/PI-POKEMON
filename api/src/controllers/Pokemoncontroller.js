const { Pokemon, Type } = require("../db.js");
const axios = require("axios");

let getPokemonApi = async () => {
  const url = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
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
  // try {
  //   let pokemonBd = await Pokemon.findAll({
  //     attributes: [
  //       "id",
  //       "name",
  //       "hp",
  //       "attack",
  //       "defense",
  //       "speed",
  //       "height",
  //       "weight",
  //     ],
  //     include: {
  //       model: Type,
  //     },
  //   });
  //   //console.log(pokemonBd)
  //   pokemonBd = pokemonBd.map(
  //     (el) =>
  //       (el = {
  //         name: el.name,
  //         id: el.id,
  //         img: el.img,
  //         hp: el.hp,
  //         attack: el.attack,
  //         defense: el.defense,
  //         speed: el.speed,
  //         weight: el.weight,
  //         height: el.height,
  //         types: el.types.map((t) => t.nombre),
  //       })
  //   );

  //   return pokemonBd;
  // } catch (e) {
  //   console.log("ERROR en getPokemonBd: " + e);
  // }

  let pokeDb = await Pokemon.findAll({
    include:[{
        model: Type,
        attributes: ['name'],
        through:{
            attributes: []
        }
    }]
})

let pokeTMap = pokeDb.map(curr => {
    return{
        id: curr.id,
        name: curr.name,
        height: curr.height,
        weight: curr.weight,
        hp: curr.hp,
        attack: curr.attack,
        defense: curr.defense,
        speed: curr.speed,
        image: curr.image,
        types: curr.types.map(curr => curr.name)
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
