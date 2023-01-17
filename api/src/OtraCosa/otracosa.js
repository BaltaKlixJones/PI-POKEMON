

// GET = /
// *********************NUEVO***********************
  // const suma = [...apiPokemon, ...response];
  // console.log("SUMA:", suma)
  // const pokemonsInfo = [];

  // for (let i = 0; i < suma.length; i++ ){
  //     const { url } = suma[i]
  //     const  { data }  = await axios.get(url)
  //     pokemonsInfo.push({
  //         id: data.id,
  //         name: data.name,
  //         // spriteSrc: data.sprites.other.dream_world.front_default,
  //         types: data.types.map((e) => e.type.name),
  //         attack: data.stats[1].base_stat,
  //         defense: data.stats[2].base_stat,
  //         speed: data.stats[5].base_stat,
  //         hp: data.stats[0].base_stat,
  //         weight: data.weight,
  //         height: data.height,
  //     });
  //     return pokemonsInfo
  // }
  // ***************************************
  //--------------------********************************************************************************

  //--------------------********************************************************************************
  // const apiUrl1 = await axios.get("https://pokeapi.co/api/v2/pokemon");
  //   const apiPokemon1 = await apiUrl1.data.results;
  //   const apiUrl2 = apiUrl1.data.next;
  //   const apiUrl2a = await axios.get(apiUrl2);
  //   const apiPokemon2 = apiUrl2a.data.results;
  //   // concateno y los guardo en un solo objeto
  //   const allPokemonsApi = [...apiPokemon1, ...apiPokemon2];
  //   //Traer info pokemon ---> id, nombre, tipo, img, atributos(vida, fuerza, defensa, velocidad, altura, peso)
  //   const pokemonsInfo = [];

  //   for (let i = 0; i < allPokemonsApi.length; i++) {
  //     const { url } = allPokemonsApi[i];
  //     const { data } = await axios.get(url);
  //     pokemonsInfo.push({
  //       id: data.id,
  //       name: data.name,
  //       spriteSrc: data.sprites.other.dream_world.front_default,
  //       types: data.types.map((e) => e.type.name),
  //       attack: data.stats[1].base_stat,
  //       defense: data.stats[2].base_stat,
  //       speed: data.stats[5].base_stat,
  //       hp: data.stats[0].base_stat,
  //       weight: data.weight,
  //       height: data.height,
  //     });
  //     return pokemonsInfo
  //   }
  //   const db = Pokemon.findAll({include : [{model: Type}]})
  //   const suma = [...pokemonsInfo, ...db]
  //   res.status(200).json(suma)
  // const { name } = req.body;
  //   const pokeTotal = await getPokemons();
  //   if (name) {
  //     let pokeName = pokeTotal.filter((el) =>
  //       el.name.toLowerCase().includes(name.toLowerCase())
  //     );
  //     pokeName.length
  //       ? res.status(200).send(pokeName)
  //       : res.status(404).send("POKEMON NOT FOUND");
  //   } else {
  //     res.status(200).json(pokeTotal);
  //   }