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
    console.log("DATAAAA: ", url2a);

    let i = 20;

    console.log("RESPONSE", response[i]);

    //console.log("DATAAAAAA",data)
    const { url } = response[1];
    const { data } = await axios.get(url);

    //console.log(data.next);
    const pokemon = response.map((poke) => {
      // arreglo con los personajes de la API
      i++;
      const obj = {
        id: data.id++,
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
    });

    console.log("DATAAAA: ", response.id);
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

router.post("/create", async (req, res) => {
  const { name, hp, attack, defense, speed, img, height, weight, types } = req.body;

  if (
    !name ||
    !hp ||
    !attack ||
    !defense ||
    !speed ||
    !height ||
    !weight
  )
    res.status(400).json({ msg: "Faltan datos" }); // validar los datos
  try {
    const obj = { name, hp, attack, defense, speed, height, weight, types }
    const nvoPokemon = await Pokemon.create(obj)

    // console.log(nvoPokemon.__proto__);
    nvoPokemon.addType(types) // relaciona el pokemon nuevo con el tipo 

    res.status(200).send(nvoPokemon)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// get types 

router.get("/types", async (req, res) => {
    try {
        await axios.get("https://pokeapi.co/api/v2/type").then(response => {
        let aux = response.data.results.map(ty => {
            const obj = {
                id: ty.id, 
                type: ty.name
            }
            return obj 
        }) 
        res.status(200).send(aux)
    })
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
