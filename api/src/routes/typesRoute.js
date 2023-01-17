const express = require("express");
const router = express.Router();
const { Pokemon, Type } = require("../db");

// GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

module.exports =  router.get("/", (req, res) => {});

