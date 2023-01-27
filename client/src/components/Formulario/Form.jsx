// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// // pegar al backend para que cree el pokemon en la base de datos
// // renderizar un form que permita ingresar  y gestionar los datos del usuario
// // todo de manera controlada (en el primer paso ya nos dice los errores y cuando lo entregamos lo entregamos sin errores)

// export default function Form() {

//     const mapToTypes = useSelector((state) => state.types);
//     const types = mapToTypes.map((e) => e.name);
//   // esto crea un objeto ----> le envio el objeto al servidor
//   const [pokemon, setPokemon] = useState({
//     name: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//     height: "",
//     weight: "",
//     img: "",
//     types: [],
//   });

//   const [errorButton, setErrorButton] = useState(true);

//   // funcion que maneja los cambios
//   function handleChange() {}
//   //funcion que maneja la entrega. No debe preocuparse por validar
//   function handleSumbit() {}
//   // funcion que maneja los types
//   function handleSelect(e) {
//     setPokemon({
//         ...pokemon,
//         types: [...pokemon.types, e.target.value],
//       });
//   }

//   function validate(data) {}

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSumbit}>
//           <div>
//             <label>Nombre</label>
//             <input
//               name="name"
//               value={pokemon.name}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Vida</label>
//             <input name="hp" value={pokemon.hp} onChange={handleChange}></input>
//             {/*-------------*/}
//             <label>Ataque</label>
//             <input
//               name="attack"
//               value={pokemon.attack}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Defensa</label>
//             <input
//               name="defense"
//               value={pokemon.defense}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Velocidad</label>
//             <input
//               name="speed"
//               value={pokemon.speed}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Altura</label>
//             <input
//               name="height"
//               value={pokemon.height}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Peso</label>
//             <input
//               name="weight"
//               value={pokemon.weight}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Imagen</label>
//             <input
//               name="img"
//               value={pokemon.img}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Tipo</label>
//             <select onChange={(e) => handleSelect(e)}>
//               {types.map((t) => (
//                 <option value={t}>{t}</option>
//               ))}
//             </select>

//             <p>
//               <p>{pokemon.types.map((el) => el + " ")}</p>
//             </p>
//             {/*-------------*/}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { createPoke, getTypes } from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";

// export default function PokemonCreate() {
//   const dispatch = useDispatch();
//   const mapToTypes = useSelector((state) => state.types);
//   const history = useHistory();
//   const types = mapToTypes.map((e) => e.name);
//   console.log("esto imprimo ==> ", types);
//   const allTypes  = useSelector(state => state.types)

//   const [input, setInput] = useState({
//     name: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//     height: "",
//     weight: "",
//     img: "",
//     types: [],
//   });

//   function handleChange(e) {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function handleSelect(e) {
//     setInput({
//       ...input,
//       types: [...input.types, e.target.value],
//     });
//     console.log(input);
//   }

//   function handleSubmit(e) {
//     //console.log(input);
//     (e).preventDefault()
//     if (!input.name) return alert("Debe colocar un nombre para poder seguir");
//     else if (!input.hp || input.hp < 0) return alert("Debe colocar puntos de vida validos para seguir");
//     else if (!input.attack || input.attack < 0) return alert("Debe colocar puntos de fuerza validos para poder seguir");
//     else if (!input.defense || input.defense < 0) return alert("Debe colocar puntos de defensa validos para poder seguir");
//     else if (!input.speed || input.speed < 0) return alert("Debe colocar puntos de velocidad validos para poder seguir");
//     else if (!input.height || input.height < 0) return alert("Debe colocar una altura valida para poder seguir");
//     else if (!input.weight || input.weight < 0) return alert("Debe colocar peso valido para poder seguir");
//     else if (!input.img) return alert("Debe colocar una dirección para poder cargar la imagen");
//     else if (!input.types.length) return alert("Debe colocar al menos un tipo de Pokemon");
//     dispatch(createPoke(input));

//     // alert("¡El pokemon fue creado con éxito!");

//     setInput({
//       name: "",
//       hp: "",
//       attack: "",
//       defense: "",
//       speed: "",
//       height: "",
//       weight: "",
//       img: "",
//       types: [],
//     });
//     history.push("/");
//   }

//   useEffect(() => {
//     dispatch(getTypes());
//   }, [dispatch]);

//   return (
//     <div className="">
//       <Link to="/">
//         <button>VOLVER ATRAS</button>
//       </Link>
//     <div className=""></div>
//       <h1 className="titleForm">Crea tu Pokemon</h1>

//       <form className="formulario" on onSubmit={(e) => handleSubmit(e)}>
//         <div >
//           <label>Nombre: </label>{" "}
//           <input
//             type="text"
//             value={input.name}
//             name="name"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Vida: </label>
//           <input
//             type="number"
//             value={input.hp}
//             name="hp"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Fuerza: </label>
//           <input
//             type="number"
//             value={input.attack}
//             name="attack"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Defensa: </label>
//           <input
//             type="number"
//             value={input.defense}
//             name="defense"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Velocidad: </label>
//           <input
//             type="number"
//             value={input.speed}
//             name="speed"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Altura: </label>
//           <input
//             type="number"
//             value={input.height}
//             name="height"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Peso: </label>
//           <input
//             type="number"
//             value={input.weight}
//             name="weight"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Imagen: </label>
//           <input
//             type="text"
//             value={input.img}
//             name="img"
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//             <label>Tipo</label>
//         <select onChange={(e) => handleSelect(e)}>
//           {types.map((type) => (
//             <option value={type}>{type}</option>
//           ))}
//         </select>

//         {/* <select name="tipo"
//         value={types}
//         onChange={(e) => handleSelect(e)}
//         >

//         </select> */}

//             {/* <select onChange={(e) => handleSelect(e)}>
//             <option value="all">Todos</option>
//             <option value="normal">Normal</option>
//             <option value="fighting">Fighting</option>
//             <option value="flying">Flying</option>
//             <option value="poison">Poison</option>
//             <option value="ground">Ground</option>
//             <option value="rock">Rock</option>
//             <option value="bug">Bug</option>
//             <option value="ghost">Ghost</option>
//             <option value="steel">Steel</option>
//             <option value="fire">Fire</option>
//             <option value="water">Water</option>
//             <option value="grass">Grass</option>
//             <option value="electric">Electric</option>
//             <option value="psychic">Psychic</option>
//             <option value="ice">Ice</option>
//             <option value="dragon">Dragon</option>
//             <option value="dark">Dark</option>
//             <option value="fairy">Fairy</option>
//             <option value="unknown">Unknown</option>
//             <option value="shadow">Shadow</option>
//           </select> */}
//         </div>

//         <br />

//         <button type="submit"> Crear Pokemon </button>

//       </form>
//     </div>
//   );
// }

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { createPoke, getTypes } from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";

//  //import TypeIcon from "../TypeIcon/TypeIcon";
// // import './index.css'

// export default function Form() {
//   const dispatch = useDispatch();
//   const types = useSelector((state) => state.types);
//   const history = useHistory();

//   const [input, setInput] = useState({
//     name: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//     height: "",
//     weight: "",
//     image: "",
//     types: [],
//   });
//   const [errors, setErrors] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (Object.values(errors).length) {
//       let message = ''
//       console.log(message)
//       let err = Object.values(errors)
//       return alert(message = err.map(e => e + '\n'))
//     } else {
//       const { name, hp, attack, defense, speed, image, height, weight, types } = input;
//       if (name && hp && attack && defense && speed && height && weight && types.length !== 0) {
//         dispatch(createPoke(input));

//         alert('Pokemon created successfully!')
//       } else alert("Some field is missing information");
//       setInput({
//         name: "",
//         hp: "",
//         attack: "",
//         defense: "",
//         speed: "",
//         height: "",
//         weight: "",
//         image: "",
//         types: [],
//       });
//       history.push("/pokemons");
//     }
//   }

//   useEffect(() => {
//     dispatch(getTypes());
//   }, [dispatch]);

//   function handleChange(e) {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });

//     setErrors(
//       validate({
//         ...input,
//         [e.target.name]: [e.target.value],
//       })
//     );

//   }

//   function handleClearTypes(event) {
//     setInput({
//       ...input,
//       types: []
//     })
//   }

//   function handleSelect(event) {
//     setInput({
//       ...input,
//       types: [...input.types, event.target.value],
//     });
//   }
//   function tisNumber(n) {
//     if (/^\d+$/.test(n)) {
//       return true;
//     }
//     return false;
//   }

//   function tisString(n) {
//     if (/^\D+$/.test(n)) {
//       return true;
//     }
//     return false;
//   }

//   function validate(input) {
//     let errors = {};
//     if (!input.name) {
//       errors.name = "Please input a name";

//     } else if (!tisString(input.name)) errors.name = "characters only";

//     else if (!input.hp) errors.hp = "missing value";

//     else if (!tisNumber(input.hp)) errors.hp = "numbers only";

//     else if (!input.attack) errors.attack = "missing value";

//     else if (!tisNumber(input.attack)) errors.attack = "numbers only";

//     else if (!input.defense) errors.defense = "missing value";

//     else if (!tisNumber(input.defense)) errors.defense = "numbers only";

//     else if (!input.speed) errors.speed = "missing value";

//     else if (!tisNumber(input.speed)) errors.speed = "numbers only";

//     else if (!input.weight) errors.weight = "missing value";

//     else if (!tisNumber(input.weight)) errors.weight = "numbers only";

//     else if (!input.height) errors.height = "missing value";

//     else if (!tisNumber(input.height)) errors.height = "numbers only";
//     // if (input.types.length === 0) errors.types = "You must choose a Type for your pokemon!!"
//     return errors;
//   }
//   return (
//     <div className="form-container">
//       {/* <p className="form-tittle">Create your pokemon!</p> */}
//       <form
//         onSubmit={(e) => handleSubmit(e)}
//         className='form-layout' >
//         <div >
//           <input
//             className='generic-input'
//             required
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={input.name}
//             onChange={(e) => handleChange(e)}
//           />
//           {errors.name && <p className="errors">{errors.name}</p>}
//         </div>

//         <div>
//           <input
//             className='generic-input'
//             type="number"
//             placeholder="Health"
//             name="hp"
//             value={input.hp}
//             onChange={(e) => handleChange(e)}
//           />
//           {errors.hp && <p className="errors">{errors.hp}</p>}
//         </div>

//         <div>
//           <input
//             className='generic-input'
//             type="number"
//             placeholder="Attack"
//             name="attack"
//             value={input.attack}
//             onChange={(e) => handleChange(e)}
//           />
//           {errors.attack && <p className="errors">{errors.attack}</p>}
//         </div>

//         <div>
//           <input
//             className='generic-input'
//             type="number"
//             placeholder="Defense"
//             name="defense"
//             value={input.defense}
//             onChange={(e) => handleChange(e)}
//           />
//           {errors.defense && <p className="errors">{errors.defense}</p>}
//         </div>

//         <div>
//           <input
//             className='generic-input'
//             type="number"
//             placeholder="Speed"
//             name="speed"
//             value={input.speed}
//             onChange={(e) => handleChange(e)}
//           />
//           {errors.speed && <p className="errors">{errors.speed}</p>}
//         </div>

//         <div>
//           <input
//             className='generic-input'
//             type="number"
//             placeholder="Height"
//             name="height"
//             value={input.height}
//             onChange={(e) => handleChange(e)}
//           />
//           {errors.height && <p className="errors">{errors.height}</p>}
//         </div>
//         <div>
//           <input
//             className='generic-input'
//             type="number"
//             placeholder="Weight"
//             name="weight"
//             value={input.weight}
//             onChange={(e) => handleChange(e)}
//           />
//           <div>
//             {errors.weight && <p className="errors">{errors.weight}</p>}

//           </div>
//         </div>
//         <input
//           className="generic-input"
//           type="text"
//           name="image"
//           placeholder={("pick an image")}
//           onChange={(e) => handleChange(e)}
//           value={input.image}
//         />
//         <select
//           className='generic-input'
//           onChange={(e) => {
//             handleSelect(e);
//           }}
//         >
//           {types.map((e) => {
//             return (
//               <option value={e.type} key={e.id}>
//                 {e.name}
//               </option>
//             );
//           })}
//         </select>

//         <div className="form-types">
//         {input.types.map((el) => el + " ")}
//         </div>
//         <div className="button-container">
//           <button className="realodButton" href={null} onClick={handleClearTypes} >Clear</button>
//           <button className="realodButton" type="submit" >Create!</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPoke } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";

import "./Form.css";

export default function CreatePokemon() {
  const history = useHistory();

  let [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [],
  });

  const dispatch = useDispatch();

  const tipos = useSelector((state) => state.types);

  let [error, setError] = useState({});

  let [disEna, setDisEna] = useState(false);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // setError(
    //     validaciones({...input, [e.target.name]: e.target.value})
    // );

    // handleDisable(validaciones({...input, [e.target.name]: e.target.value}))

    validaciones({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createPoke(input));

    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      img: "",
      types: [],
    });

    alert("¡Pokemon creado con Éxito!");
    history.push("/home");
  };

  const handleTypes = (e) => {
    if (!input.types.includes(e.target.value)) {
      setInput({ ...input, types: [...input.types, e.target.value] });
      // setError(
      //     validaciones({...input, types: [input.types, e.target.value]})
      // );

      // handleDisable(validaciones({...input, types: [input.types, e.target.value]}))
      validaciones({ ...input, types: [...input.types, e.target.value] });
    } else {
      alert("El tipo ya fue seleccionado.");
    }
  };

  const validaciones = (pokeValidar) => {
    let validError = {};

    if (!pokeValidar.name) {
      validError.name = "Debe tener un nombre";
    } else {
      if (/\s/.test(pokeValidar.name)) {
        validError.name = "No se permiten espacios";
      }
      if (/[0-9]/.test(pokeValidar.name)) {
        validError.name = "Solo letras por favor";
      }
      if (/\W/.test(pokeValidar.name)) {
        validError.name = "No se permiten carácteres especiales";
      }
    }
    if (!pokeValidar.attack) {
      validError.attack = "Necesita tener ataque";
    } else {
      if (pokeValidar.attack > 255) {
        validError.attack = "El ataque no puede ser mayor a 255";
      } else if (pokeValidar.attack < 1) {
        validError.attack = "No puede ser un numero negativo";
      }
    }
    if (!pokeValidar.defense) {
      validError.defense = "Necesita una defensa";
    } else {
      if (pokeValidar.defense > 255) {
        validError.defense = "La defensa no puede ser mayora a 255";
      } else if (pokeValidar.defense < 1) {
        validError.defense = "Tiene que ser mayor a 1 ";
      }
    }
    if (!pokeValidar.speed) {
      validError.speed = "Necesita velocidad";
    } else {
      if (pokeValidar.speed > 255) {
        validError.speed = "La velocidad no puede ser mayora a 255";
      } else if (pokeValidar.speed < 1) {
        validError.speed = "Debe ser mayor a 1";
      }
    }
    if (!pokeValidar.hp) {
      validError.hp = "Debe tener vida";
    } else {
      if (pokeValidar.hp > 255) {
        validError.hp = "La vida no puede ser mayora a 255";
      } else if (pokeValidar.hp < 1) {
        validError.hp = "La vida debe ser mayor a 1";
      }
    }
    if (!pokeValidar.height) {
      validError.height = "Algo esta mal ...";
    } else {
      if (pokeValidar.height > 40) {
        validError.height = "La altura no puede superar los 40 metros";
      } else if (pokeValidar.height < 1) {
        validError.height = "Algo esta mal ...";
      }
    }
    if (!pokeValidar.weight) {
      validError.weight = "Algo esta mal ...";
    } else {
      if (pokeValidar.weight > 1000) {
        validError.weight = "El peso no puede ser superior a 1000";
      } else if (pokeValidar.weight < 1) {
        validError.weight = "Algo esta mal ...";
      }
    }
    if (pokeValidar.img) {
      if (
        !/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(
          pokeValidar.img
        )
      ) {
        validError.img = "El link de la imagen debe ser una URL";
      }
    } else {
    //   let arrImage = [];

    //   let setIndex = Math.round(Math.random() * 4);

    //   pokeValidar.img = arrImage[setIndex];
      setInput({ ...input, img: pokeValidar.img });
    }
    if (pokeValidar.types.length === 0 || pokeValidar.types.length > 1) {
      validError.types = "Ponle un tipo";
    }

    setError(validError);
    handleDisable(validError);
  };

  const handleDisable = (error) => {
    // if(!error.name && !error.attack && !error.image && !error.defense && !error.height && !error.weight && !error.speed && !error.hp){
    //     setDisEna(true)
    // }
    // else{
    //     setDisEna(false)
    // }

    if (
      error?.name === undefined &&
      error?.attack === undefined &&
      error?.defense === undefined &&
      error?.speed === undefined &&
      error?.hp === undefined &&
      error?.height === undefined &&
      error?.weight === undefined &&
      error?.types === undefined
    ) {
      setDisEna(true);
    } else {
      setDisEna(false);
    }
  };

  return (
    <div className="form">
      <div className="container">
      <button class="back-button">
          <Link to="/home">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg >
            Volver atrás
          </Link>
        </button>
        <h3>¡Crea tu Pokemon!</h3>
        
        <br />
        <form onSubmit={(e) => handleSubmit(e)} id={"formulario"}>
          <div className="input">
            <label>Nombre: </label>
            <input
              type={"text"}
              placeholder={"Ponle un nombre!"}
              name={"name"}
              value={input.name}
              onChange={(e) => handleOnChange(e)}
            />
            <p>{error.name}</p>
            <br />
          </div>

          <div className="input">
            <label>Imagen: </label>
            <label>
              <input
                type={"text"}
                placeholder={"Pon una url!"}
                name={"img"}
                value={input.img}
                onChange={(e) => handleOnChange(e)}
              />{" "}
              url{" "}
            </label>
            <br />
            <br />
            <br />
            <img
              style={{ height: "400px", width: "400px" }}
              src={
                input.img
                  ? input.img
                  : "https://wallpaperaccess.com/full/4167709.gif"
              }
              alt=""
            ></img>
            <p>{error.img}</p>
            {/* {
                  input.image? <p>Este es un Pokemon de ejemplo</p> : <p>¿Quién es ese pokemon?</p>
              } */}
          </div>

          <div className="atributos">
            <label>Ataque: </label>
            {/* <input type={'number'} placeholder={'Ej: 40'} name={'attack'} value={input.attack} onChange={ (e) => handleOnChange(e)}/> */}
            <input
              type={"range"}
              min="1"
              max="255"
              name={"attack"}
              value={input.attack}
              onChange={(e) => handleOnChange(e)}
            />
            <p>{input.attack}</p>
            <p>{error.attack}</p>
            <br />

            <label>Defensa: </label>
            {/* <input type={'number'} placeholder={'Ej: 65'} name={'defense'} value={input.defense} onChange={ (e) => handleOnChange(e)}/> */}
            <input
              type={"range"}
              min="1"
              max="255"
              name={"defense"}
              value={input.defense}
              onChange={(e) => handleOnChange(e)}
            />
            <p>{input.defense}</p>
            <p>{error.defense}</p>

            <br />

            <label>Velocidad: </label>
            {/* <input type={'number'} placeholder={'Ej: 55'} name={'speed'} value={input.speed} onChange={ (e) => handleOnChange(e)}/> */}
            <input
              type={"range"}
              min="1"
              max="255"
              name={"speed"}
              value={input.speed}
              onChange={(e) => handleOnChange(e)}
            />
            <p>{input.speed}</p>
            <p>{error.speed}</p>

            <br />
          </div>
          <div className="atributos2">
            <label>Vida: </label>
            {/* <input type={'number'} placeholder={'Ej: 70'} name={'hp'} value={input.hp} onChange={ (e) => handleOnChange(e)}/> */}
            <input
              type={"range"}
              min="1"
              max="255"
              name={"hp"}
              value={input.hp}
              onChange={(e) => handleOnChange(e)}
            />
            <p>{input.hp}</p>
            <p>{error.hp}</p>

            <br />

            <label>Peso: </label>
            <label>
              <input
                type={"number"}
                placeholder={"Entre 1 y 1000"}
                name={"weight"}
                value={input.weight}
                onChange={(e) => handleOnChange(e)}
              />{" "}
              kg{" "}
            </label>
            <p>{error.weight}</p>

            <br />

            <label>Altura: </label>
            <label>
              <input
                type={"number"}
                placeholder={"Entre 1 y 40"}
                name={"height"}
                value={input.height}
                onChange={(e) => handleOnChange(e)}
              />{" "}
              m{" "}
            </label>
            <p>{error.height}</p>

            <br />
          </div>
          <div className="tipos">
            <label>Tipos: </label>
            <select onChange={(e) => handleTypes(e)}>
              {tipos?.map((ty) => {
                return (
                  <option name={ty.name} value={ty.name}>
                    {ty.type}
                  </option>
                );
              })}
            </select>
            {/*                  
                      {
                      input.types?.map(curr => {
                          return(
                              <CardTypes key={curr} idT={curr} nameT={tipos[curr - 1].type} input={input} set={setInput} validador={validaciones}/>
                          )
                      })
                      
                      } */}

            <p>{error.types}</p>

            <br />
          </div>
          <br />
          <br />
          <div className="btnCrear">
            <button disabled={!disEna && "disabled"} type={"submit"}>
              <svg
                class="css-i6dzq1"
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                stroke-width="2"
                stroke="#942727"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
              Crear Pokemon
            </button>
            {!disEna ? <p>Revise todos los campos</p> : <p></p>}
          </div>
        </form>
        <br />

        {/* <div className='volver'>
          <Link to= '/home'><button>
<span>Volver</span>  
</button></Link>
      </div> */}

        
      </div>
    </div>
  );
}

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// import React from "react";
// import {useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {Link, useHistory} from "react-router-dom"
// import { getPokemones, getTypes, createPoke } from "../../redux/actions";

// function validate(input) {
//     const errors = {}
//     if (!input.name || input.name.length < 3) {errors.name="Deben ser mas de 3 letras"}
//     if (!input.hp || input.hp.length < 150 || input.hp < 0) {errors.name="La vida debe ser entre 1 y 150"}
//     if (!input.attack || input.attack < 0 || input.attack > 150) {errors.attack = "Debe tener ataque entre 1 - 150";}
//     if (!input.defense || input.defense < 0 || input.defense > 150) {errors.defense = "Debe tener defensa entre 1 - 150";}
//     if (!input.speed || input.speed < 0 || input.speed > 150) {errors.speed = "Debe tener velocidad entre 1 - 150";}
//     if (input.types.length === 0) {errors.types = "Debe tener por lo menos un tipo";}
//     return errors
// }

// const CreatePokemonForm = () =>{
//     const dispatch = useDispatch()
//     const types = useSelector((state) => state.type)

//     const [errors, setErrors] = useState({})
//     const history = useHistory()

//     const [input, setInput] = useState({
//         name: "",
//         hp:"",
//         attack:"",
//         defense:"",
//         speed:"",
//         height:"",
//         weight:"",
//         image:"",
//         types:[]
//     });

//     let btnDisabled=
//     !(
//         input.name.length &&
//         input.hp.length &&
//         input.attack.length &&
//         input.defense.length &&
//         input.speed.length &&
//         input.types.length
//       )||
//       input.hp > 150 ||
//       input.attack > 150 ||
//       input.defense > 150 ||
//       input.speed > 150;

//     useEffect(()=>{
//         dispatch(getTypes())
//     }, [dispatch])

//     useEffect(()=>{
//         setErrors(validate({
//         ...input
//         }))
//     },[input])

//     const handleChange = (e) =>{
//         setInput({
//             ...input, [e.target.name]: e.target.value.toLowerCase()
//         })
//         setErrors(
//             validate({
//                 ...input, [e.target.name]:e.target.value
//             })
//         )
//     }

//     const handleSelect =(ev) =>{
//         if (!input.types.includes(ev.target.value)) {
//             setInput({
//               ...input,
//               types: [...input.types, ev.target.value],
//             });
//           }
//     }
//     const handleSubmit = (ev) => {
//         ev.preventDefault();
//         dispatch(createPoke(input));
//         alert("Pokemon creado");
//         setInput({
//           name: "",
//           hp: "",
//           attack: "",
//           defense: "",
//           speed: "",
//           height: "",
//           weight: "",
//           image: "",
//           types: [],
//         });
//         history.push("/home");
//         dispatch(getPokemones());
//       };

//       const handleDeleteType = (e) => {
//         setInput({
//             ...input,
//             types:input.types.filter((t)=> t!== e)
//         })
//       }

//       return (
//         <div>
//           <div className="">
//             <img src="" alt="izq"></img>
//             <Link to="/home">
//               <button className="">Return to home</button>
//             </Link>
//           </div>
//           <div className="">
//             <div className="">
//               <img src="" alt="signo" className="" />
//               <img src="" alt="pika" className=""></img>
//               <div className="">
//                 <img src="" alt="poke" className=""></img>
//                 <div className="">Create your pokemon</div>
//               </div>

//               <form onSubmit={(e) => handleSubmit(e)}>
//                 <div className="">
//                   <div className="">
//                     <div>
//                       <div>Name:</div>
//                       <input
//                         type="text"
//                         value={input.name}
//                         name="name"
//                         onChange={(e) => handleChange(e)}
//                         placeholder="Name"
//                         className=""
//                       />
//                       {errors.name && (
//                         <div className="">{errors.name}</div>
//                       )}
//                     </div>

//                     <div>
//                       <div>Hp:</div>
//                       <input
//                         type="number"
//                         value={input.hp}
//                         name="hp"
//                         onChange={(e) => handleChange(e)}
//                         placeholder="1 - 150"
//                         className=""
//                       />
//                       {errors.hp && <div className="">{errors.hp}</div>}
//                     </div>

//                     <div>
//                       <div>Attack:</div>
//                       <input
//                         type="number"
//                         value={input.attack}
//                         name="attack"
//                         onChange={(e) => handleChange(e)}
//                         placeholder="1 - 150"
//                         className=""
//                       />
//                       {errors.attack && (
//                         <div className="">{errors.attack}</div>
//                       )}
//                     </div>

//                     <div>
//                       <div>Defense:</div>
//                       <input
//                         type="number"
//                         value={input.defense}
//                         name="defense"
//                         onChange={(e) => handleChange(e)}
//                         placeholder="1 - 150"
//                         className=""
//                       />
//                       {errors.defense && (
//                         <div className="">{errors.defense}</div>
//                       )}
//                     </div>

//                     <div>
//                       <select
//                         onChange={(e) => handleSelect(e)}
//                         className=""
//                         disabled={input.types.length >= 2}
//                         defaultValue="title"
//                       >
//                         <option value="title" disabled name="types">
//                           Types
//                         </option>
//                         {types.map((t) => {
//                           return (
//                             <option
//                               value={t.name}
//                               key={t.name}
//                               className=""
//                             >
//                               {t.name[0].toUpperCase() + t.name.slice(1)}
//                             </option>
//                           );
//                         })}
//                       </select>

//                       <ul className="">
//                         {input.types.map((t) => {
//                           return (
//                             <li key={t} className="">
//                               {t[0].toUpperCase() + t.slice(1)}
//                               <button
//                                 onClick={() => handleDeleteType(t)}
//                                 className=""
//                               >
//                                 x
//                               </button>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                       {errors.types && (
//                         <div className="">{errors.types}</div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="">
//                     <div>
//                       <div>Speed:</div>
//                       <input
//                         type="number"
//                         value={input.speed}
//                         name="speed"
//                         onChange={(e) => handleChange(e)}
//                         placeholder="1 - 150"
//                         className=""
//                       />
//                       {errors.speed && (
//                         <div className="">{errors.speed}</div>
//                       )}
//                     </div>

//                     <div>
//                       <div>
//                         Height <small>(cm)</small>:
//                       </div>
//                       <input
//                         type="number"
//                         value={input.height}
//                         name="height"
//                         onChange={(e) => handleChange(e)}
//                         placeholder="Height"
//                         className=""
//                       />
//                     </div>

//                     <div>
//                       <div>
//                         Weight <small>(kg)</small>:
//                       </div>
//                       <input
//                         type="number"
//                         value={input.weight}
//                         name="weight"
//                         onChange={(e) => handleChange(e)}
//                         placeholder="Weight"
//                         className=""
//                       />
//                     </div>

//                     <div>
//                       <div>Image:</div>
//                       <input
//                         type="text"
//                         value={input.image}
//                         name="image"
//                         onChange={(e) => handleChange(e)}
//                         className=""
//                         placeholder="URL"
//                       />
//                       {errors.image && (
//                         <div className="">{errors.image}</div>
//                       )}
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={btnDisabled}
//                       className=""
//                     >
//                       Create
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     export default CreatePokemonForm;
