const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const axios = require("axios");

const router = Router();
const { getPokemons } = require("../controllers/Pokemoncontroller");

// GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal

router.get("/getAll", async (req, res) => {
  try {
    const url1 = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const apiPokemon = await url1.data.results;
    const url2 = url1.data.next;

    const url2a = await axios.get(url2);
    const response = url2a.data.results;
    //console.log("response:", response)
    //console.log("DATAAAA: ",data)


    let i = 0
    const { url } = response[1];
    

    const { data } = await axios.get(url);
    //console.log("DATAAAAAA",data)

    //console.log(data.next);
    const pokemon = response.map((poke) => {
      // arreglo con los personajes de la API
      i++
      const obj = {
        id: i,
        name: poke.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        img: data.sprites.other.dream_world.front_default,
      };
      return obj;
    })
     
    console.log("DATAAAA: ",data.id)
    // console.log("POKEMONS INFO ",pokemonsInfo)

    const bd = await Pokemon.findAll({ include: [{ model: Type }] }); // arreglo con los personajes de la bd
    const suma = [...pokemon, ...bd];
    res.status(200).json(suma);
  } catch (error) {
      res.status(400).json({ error: error.message });
    }
});


// GET /pokemons/{idPokemon}:
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

//router.get("/:id", (req, res) => {});

// GET /pokemons/name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado

// router.get("/pokemons/name", (req, res) => {});

// POST /pokemons:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
// Crea un pokemon en la base de datos relacionado con sus tipos.

// router.post("/create", (req, res) => {});

module.exports = router;
