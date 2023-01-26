const axios = require("axios");
const { Router } = require("express");
const { Type } = require("../db");

const getTypesAll = async () => {
  // axios.get("https://pokeapi.co/api/v2/type").then((response) => {
  //   let types = response.data.results.map((e) => {
  //     const obj = {
  //       type: e.name,
  //     };
  //     return obj;
  //   });

  //   Type.findAll(types);
  // });

    const getTypes = await axios.get(
      "https://pokeapi.co/api/v2/type"
    );
  
    // Lo guardo en mi db con el nombre
    const typesApi = await getTypes.data.results.map((t) => t.name);
    
    typesApi.forEach((t) => {
      Type.findOrCreate({ where: { name: t } });
    });
    // Retorno todos los generos de mi db
    let typeBDD = await Type.findAll();
   
    return typeBDD;
  };


module.exports = { getTypesAll };
