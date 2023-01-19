const axios = require("axios");
const { Router } = require("express");
const { Type } = require("../db");

const getTypesAll = async () => {
  axios.get("https://pokeapi.co/api/v2/type").then((response) => {
    let types = response.data.results.map((e) => {
      const obj = {
        type: e.name,
      };
      return obj;
    });

    Type.findAll(types);
  });
};

module.exports = { getTypesAll };
