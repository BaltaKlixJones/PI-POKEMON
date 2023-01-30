const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const axios = require("axios");

const router = Router();
const { getAllPokemons } = require("../controllers/Pokemoncontroller");
const { getTypesAll } = require("../controllers/Typescontroller");

router.get("/", async (req, res) => {
  const { name } = req.query;
  const allPokemons = await getAllPokemons(name);

  try {
    !allPokemons 
      ? res.status(404).send(name + " no existe")
      : res.status(200).send(allPokemons);
  } catch (e) {
    console.log("Error");
  }
});

router.get("/types", async (req, res) => {
  try {
    axios.get("https://pokeapi.co/api/v2/type").then((response) => {
      let types = response.data.results.map((e) => {
        const obj = {
          type: e.name,
        };
        return obj;
      });

      Type.bulkCreate(types);
      res.status(200).send(types);
    });
  } catch (error) {
    res.status(400).send({ msg: "Algo salio mal" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pokemones = await getAllPokemons();
  try {
    // console.log("HOLA ID ");
    if (id) {
      let pokemonDetail = pokemones.filter((el) => {
        return el.id == id;
      });
      pokemonDetail.length == pokemonDetail.length
        ? res.status(200).send(pokemonDetail)
        : res.status(404).send("No se pudo encontrar el pokemon");
    }
  } catch (e) {
    res.status(400).send({error: e.message})
  }
});

router.post("/create", async (req, res) => {
  const { name, hp, attack, defense, speed, img, height, weight, types } =
    req.body;

  if (!name || !hp || !attack || !defense || !speed || !height || !weight )
    res.status(400).json({ msg: "Faltan datos" }); 
  try {
    const obj = {
      name,
      img,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    };
    const nvoPokemon = await Pokemon.create(obj);

    
    const tipos = await Type.findAll({
      where: {
        name: types,
      },
    });
    // console.log(nvoPokemon.__proto__);
nvoPokemon.addType(tipos);


  // console.log(img)
  
  nvoPokemon
  ? res.status(200).send("Pokemon creado con exito")
  : res.status(400).send("No se pudo crear el pokemon");
  return nvoPokemon;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/delete/:id", async (req,res)=>{
  const { id } = req.params;
  try {
    const pokemonDelete = await Pokemon.findByPk(id);
    if (!pokemonDelete) {
      res.status(400).send("No existe el pokemon que deseas eliminar");
    } else {
      pokemonDelete.destroy();
      return res.status(200).send("Pokemon eliminado");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

module.exports = router;
