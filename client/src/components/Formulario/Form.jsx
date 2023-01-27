import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPoke, } from "../../redux/actions";
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
    setError(
        validaciones({...input, [e.target.name]: e.target.value})
    );

    handleDisable(validaciones({...input, [e.target.name]: e.target.value}))

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
      setError(
          validaciones({...input, types: [input.types, e.target.value]})
      );

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
    // if (pokeValidar.img) {
      if (
        !/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(pokeValidar.img)
          ) {
          validError.img = "El link de la imagen debe ser una URL";
       }
    // } else {
    // //   let arrImage = [""];

    // //   let setIndex = Math.round(Math.random() * 4);

    // //   pokeValidar.img = arrImage[setIndex];
    //   // setInput({ ...input, img: [...input.img] });
    // }

    if (pokeValidar.types.length === 0 ||  pokeValidar.types.length > 2) {
      validError.types = "Debe tener un maximo de 2 tipos!";
    }

    setError(validError);
    handleDisable(validError);
  };

  const handleDisable = (error) => {

    if (
      error?.name === undefined &&
      error?.attack === undefined &&
      error?.defense === undefined &&
      error?.speed === undefined &&
      error?.hp === undefined &&
      error?.height === undefined &&
      error?.weight === undefined &&
      error?.img === undefined &&
      error?.types === undefined
    ) {
      setDisEna(true);
    } else {
      setDisEna(false);
    }
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e),
    });
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
        <h2>¡Crea tu Pokemon!</h2>

        <br />
        <form onSubmit={(e) => handleSubmit(e)} className="form">
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
              />
              
            </label>
            <br />
            <br />
            <br />
            <img
              style={{ height: "400px", width: "450px" }}
              src={
                input.img
                
                  ? input.img
                  : "https://wallpaperaccess.com/full/4167709.gif"
              }
              alt="img"
            ></img>
            <p>{error.img}</p>
          </div>
            <h3>Ponle sus atributos!</h3>

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
            <p>{error.attack }</p>
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
            <br />
            <br />
            {
            input.types?.map((e) => {
              return (
                <div className="typesSelect" key={e}>
                  <p className="pTypes">{e}</p>
                  <button
                    className="btnDelete"
                    onClick={() => {
                      handleDelete(e);
                    }}
                  >
                    x
                  </button>
                </div>
              );})}
                     

            <p>{error.types}</p>

            <br />
          </div>
          <br />
          <br />
          <div className="btnCrear">
            <button disabled={!disEna && "disabled"} type={"submit"}>
              
              Crear Pokemon
            </button>
            {!disEna ? <p>Revise todos los campos</p> : <p></p>}
          </div>
        </form>
        <br />

      </div>
    </div>
  );
  
}



// import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getTypes, createPoke } from "../../redux/actions";
// import { Link, useHistory } from "react-router-dom";
// import styles from "./CreatePokemon.module.css";

// function validate(input) {
//   const errors = {};
//   if (!input.name || input.name.length < 3) {
//     errors.name = "Debe tener un nombre de mas de tres letras";
//   }

//   if (!input.hp || input.hp < 0 || input.hp > 150) {
//     errors.hp = "Debe tener hp entre 1 - 150";
//   }

//   if (!input.attack || input.attack < 0 || input.attack > 150) {
//     errors.attack = "Debe tener ataque entre 1 - 150";
//   }

//   if (!input.defense || input.defense < 0 || input.defense > 150) {
//     errors.defense = "Debe tener defensa entre 1 - 150";
//   }

//   if (!input.speed || input.speed < 0 || input.speed > 150) {
//     errors.speed = "Debe tener velocidad entre 1 - 150";
//   }

//   if (input.types.length === 0) {
//     errors.types = "Debe tener por lo menos un tipo";
//   }

//   return errors;
// }
// function CreatePokemon() {
//   const dispatch = useDispatch();
//   const types = useSelector((state) => state.type);

//   const [errors, setErrors] = useState({});

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

//   let btnDisabled =
//     !(
//       input.name.length &&
//       input.hp.length &&
//       input.attack.length &&
//       input.defense.length &&
//       input.speed.length &&
//       input.types.length
//     ) ||
//     input.hp > 150 ||
//     input.attack > 150 ||
//     input.defense > 150 ||
//     input.speed > 150;

//   useEffect(() => {
//     dispatch(getTypes());
//   }, [dispatch]);

//   useEffect(() => {
//     setErrors(
//       validate({
//         ...input,
//       })
//     );
//   }, [input]);

//   const handleChange = (ev) => {
//     setInput({
//       ...input,
//       [ev.target.name]: ev.target.value.toLowerCase(),
//     });

//     setErrors(
//       validate({
//         ...input,
//         [ev.target.name]: ev.target.value,
//       })
//     );
//   };

 
//   const handleTypes = (e) => {
//     if (!input.types.includes(e.target.value)) {
//       setInput({ ...input, types: [...input.types, e.target.value] })};
     
//       const handleSelect = (ev) => {
//         if (!input.types.includes(ev.target.value)) {
//           setInput({
//             ...input,
//             types: [...input.types, ev.target.value],
//           });
//         }
//       };

//   const handleSubmit = (ev) => {
//     ev.preventDefault();
//     dispatch(createPoke(input));
//     alert("Pokemon creado");
//     setInput({
//       name: "",
//       hp: "",
//       attack: "",
//       defense: "",
//       speed: "",
//       height: "",
//       weight: "",
//       image: "",
//       types: [],
//     });
//     history.push("/home");

//   };

// //   const handleDeleteType = (ev) => {
// //     setInput({
// //       ...input,
// //       types: input.types.filter((t) => t !== ev),
// //     });
// //   };

//   return (
//     <div>
//       <div className={styles.navBar}>
//         <img src="" alt="izq"></img>
//         <Link to="/home">
//           <button className={styles.buttonHome}>Return to home</button>
//         </Link>
//       </div>
//       <div className={styles.contGral}>
//         <div className={styles.cardCreate}>
//           <img src="" alt="signo" className={styles.signo} />
//           <img src="" alt="pika" className={styles.pikapoke}></img>
//           <div className={styles.uptitle}>
//             <img src="" alt="poke" className={styles.poke}></img>
//             <div className={styles.title}>Create your pokemon</div>
//           </div>

//           <form onSubmit={(e) => handleSubmit(e)}>
//             <div className={styles.form}>
//               <div className={styles.izq}>
//                 <div>
//                   <div>Name:</div>
//                   <input
//                     type="text"
//                     value={input.name}
//                     name="name"
//                     onChange={(e) => handleChange(e)}
//                     placeholder="Name"
//                     className={styles.inputs}
//                   />
//                   {errors.name && (
//                     <div className={styles.error}>{errors.name}</div>
//                   )}
//                 </div>

//                 <div>
//                   <div>Hp:</div>
//                   <input
//                     type="number"
//                     value={input.hp}
//                     name="hp"
//                     onChange={(e) => handleChange(e)}
//                     placeholder="1 - 150"
//                     className={styles.inputs}
//                   />
//                   {errors.hp && <div className={styles.error}>{errors.hp}</div>}
//                 </div>

//                 <div>
//                   <div>Attack:</div>
//                   <input
//                     type="number"
//                     value={input.attack}
//                     name="attack"
//                     onChange={(e) => handleChange(e)}
//                     placeholder="1 - 150"
//                     className={styles.inputs}
//                   />
//                   {errors.attack && (
//                     <div className={styles.error}>{errors.attack}</div>
//                   )}
//                 </div>

//                 <div>
//                   <div>Defense:</div>
//                   <input
//                     type="number"
//                     value={input.defense}
//                     name="defense"
//                     onChange={(e) => handleChange(e)}
//                     placeholder="1 - 150"
//                     className={styles.inputs}
//                   />
//                   {errors.defense && (
//                     <div className={styles.error}>{errors.defense}</div>
//                   )}
//                 </div>

//                 <div>
//                   <select
//                     onChange={(e) => handleSelect(e)}
//                     className={styles.select}
//                     disabled={input.types.length >= 2}
//                     defaultValue="title"
//                   >
//                     <option value="title" disabled name="types">
//                       Types
//                     </option>
//                     {types?.map((t) => {
//                       return (
//                         <option
//                           value={t.name}
//                           key={t.name}
//                           className={styles.options}
//                         >
//                           {t.name[0].toUpperCase() + t.name.slice(1)}
//                         </option>
//                       );
//                     })}
//                   </select>

//                   {/* <ul className={styles.types}>
//                   <label>Tipos: </label> 
//                   <select onChange={(e) => handleTypes(e)}>
//               {types?.map((ty) => {
//                 return (
//                   <option name={ty.name} value={ty.name}>
//                     {ty.type}
//                   </option>
//                 );
//               })}
//             </select> */}
//                     {/* {input.types?.map((t) => {
//                       return (
//                         <li key={t} className={styles.types}>
//                           {t[0].toUpperCase() + t.slice(1)}
//                           <button
//                             onClick={() => handleDeleteType(t)}
//                             className={styles.deleteButton}
//                           >
//                             x
//                           </button>
//                         </li>
//                       );
//                     })} */}
//                   {/* </ul> */}
//                   {errors.types && (
//                     <div className={styles.error}>{errors.types}</div>
//                   )}
//                 </div>
//               </div>

//               <div className={styles.der}>
//                 <div>
//                   <div>Speed:</div>
//                   <input
//                     type="number"
//                     value={input.speed}
//                     name="speed"
//                     onChange={(e) => handleChange(e)}
//                     placeholder="1 - 150"
//                     className={styles.inputs}
//                   />
//                   {errors.speed && (
//                     <div className={styles.error}>{errors.speed}</div>
//                   )}
//                 </div>

//                 <div>
//                   <div>
//                     Height <small>(cm)</small>:
//                   </div>
//                   <input
//                     type="number"
//                     value={input.height}
//                     name="height"
//                     onChange={(e) => handleChange(e)}
//                     placeholder="Height"
//                     className={styles.inputs}
//                   />
//                 </div>

//                 <div>
//                   <div>
//                     Weight <small>(kg)</small>:
//                   </div>
//                   <input
//                     type="number"
//                     value={input.weight}
//                     name="weight"
//                     onChange={(e) => handleChange(e)}
//                     placeholder="Weight"
//                     className={styles.inputs}
//                   />
//                 </div>

//                 <div>
//                   <div>Image:</div>
//                   <input
//                     type="text"
//                     value={input.image}
//                     name="image"
//                     onChange={(e) => handleChange(e)}
//                     className={styles.inputs}
//                     placeholder="URL"
//                   />
//                   {errors.image && (
//                     <div className={styles.error}>{errors.image}</div>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={btnDisabled}
//                   className={styles.button}
//                 >
//                   Create
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// }
// export default CreatePokemon;
