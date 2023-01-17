const axios = require("axios");
const { Router } = require("express");
const { Types } = require("../db");

/* 
GET /types:
Obtener todos los tipos de pokemons posibles
En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí*/

const getTypesAll = async () => {
  const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
  let allTypes = getTypes.data.results.map((e) => e.name);
  //console.log(allTypes)
  allTypes.forEach((el) => {
    Types.findOrCreate({
      where: { name: el },
    });
  });
  allTypes = await Types.findAll();
  //console.log(allTypes)
  return allTypes;
};

module.exports = { getTypesAll };

