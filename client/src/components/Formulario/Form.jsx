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
//  import { postPokemon, getTypes } from "../redux/actions";
// import { useDispatch, useSelector } from "react-redux";



// export default function PokemonCreate() {
//   const dispatch = useDispatch();
//   const mapToTypes = useSelector((state) => state.types);
//   const history = useHistory();
//   const types = mapToTypes.map((e) => e.name);
//   console.log("esto imprimo ==> ", types);

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
//     dispatch(postPokemon(input));
    
//     alert("¡El pokemon fue creado con éxito!");

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
//         {/* <select onChange={(e) => handleSelect(e)}>
//           {types.map((t) => (
//             <option value={t}>{t}</option>
//           ))}
//         </select> */}
//         {/* <select name="tipo"
//         value={types}
//         onChange={(e) => handleSelect(e)}
//         > */}

//         {/* </select> */}

//         {/* <p className="">
//           <p>{input.types.map((el) => el + " ")}</p>
//         </p> */}
//             <select onChange={(e) => handleSelect(e)}>
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
//           </select>
//         </div>

//         <br />

//         <button type="submit"> Crear Pokemon </button>
//       </form>
//     </div>
//   );
// }

import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPoke } from '../../redux/actions'
import { Link, useHistory } from 'react-router-dom';
import CardTypes from '../CardTypes';
// import "./Form.css" 


export default function CreatePokemon(){

  const history = useHistory()

  let [input, setInput] = useState({
      name: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      height: '',
      weight: '',
      image: '',
      types: []
  })

  const dispatch = useDispatch()

  const tipos = useSelector(state => state.types)


  let [error, setError] = useState({})

  let [disEna, setDisEna] = useState(false)

  useEffect(()=>{
      dispatch(getTypes())
  },[dispatch])


  const handleOnChange= (e)=>{

      setInput({...input, [e.target.name]: e.target.value});
      // setError(
      //     validaciones({...input, [e.target.name]: e.target.value})
      // );

      // handleDisable(validaciones({...input, [e.target.name]: e.target.value}))

      validaciones({...input, [e.target.name]: e.target.value})
      
  }

  const handleSubmit = (e)=> {
      e.preventDefault()
          
          dispatch(createPoke(input))
          
          setInput({
              name: '',
              hp: '',
              attack: '',
              defense: '',
              speed: '',
              height: '',
              weight: '',
              image: '',
              types: []
             
          })
          
      alert("¡Pokemon creado con Éxito!")
      history.push('/home')

  }

  const handleTypes = (e) =>{
      if(!input.types.includes(e.target.value)){
          
          setInput({...input, types: [...input.types, e.target.value]})
          // setError(
          //     validaciones({...input, types: [input.types, e.target.value]})
          // );
  
          // handleDisable(validaciones({...input, types: [input.types, e.target.value]}))
          validaciones({...input, types: [...input.types, e.target.value]})
      
      }else{
          alert("El tipo ya fue seleccionado.")
      }
  }

  const validaciones = (pokeValidar)=>{

      let validError = {}
  
      if(!pokeValidar.name){
          validError.name = "¡Ponle un nombre bonito!"
      } else{
         if(/\s/.test(pokeValidar.name)){
          validError.name = '¡No se permiten espacios!'
         }
         if(/[0-9]/.test(pokeValidar.name)){
          validError.name = "¡Solo letras por favor!"
         }
         if(/\W/.test(pokeValidar.name)){
          validError.name = '¡No se permiten carácteres especiales!'
         }
      }
      if(!pokeValidar.attack){
          validError.attack = '¡Todo gran pokemon necesita saber su potencial!'
      }else{
          if(pokeValidar.attack > 255){
              validError.attack = "¡El ataque no puede superar los 255!"
          } else if(pokeValidar.attack < 1){
              validError.attack = '¿Cómo sería un Pokemon con ataque negativo? ¡No harías daño!'
          }
      }
      if(!pokeValidar.defense){
          validError.defense = '¡Todo gran pokemon necesita saber su potencial!'
      }else{
          if(pokeValidar.defense > 255){
              validError.defense = "¡La defensa no puede superar los 255!"
          } else if(pokeValidar.defense < 1){
              validError.defense = '¡Pobrecito lo estas haciendo de papel!'
          }
          
      }
      if(!pokeValidar.speed){
          validError.speed = '¡Todo gran pokemon necesita saber su potencial!'
      }else{
          if(pokeValidar.speed > 255){
              validError.speed = "¡La velocidad no puede superar los 255!"
          } else if(pokeValidar.speed < 1){
              validError.speed = 'Más lento que vos entendiendo que no podes tener el amor de ella :,V'
          }
   
      }
      if(!pokeValidar.hp){
          validError.hp = '¡Todo gran pokemon necesita saber su potencial!'
      }else{
          if(pokeValidar.hp > 255){
              validError.hp = "¡La vida no puede superar los 255!"
          } else if(pokeValidar.hp < 1){
              validError.hp = '¿Estas haciendo un muerto?'
          }
      }
      if(!pokeValidar.height){
          validError.height = '¿Ta chiquito o ta grandecito?'
      }else{
          if(pokeValidar.height > 40){
              validError.height = "Woooow espera espera ¿qué tratas de crear? La altura no puede superar los 40 metros!"
          } else if(pokeValidar.height < 1){
              validError.height = '¿Absorbido por un agujero negro o carencia de existencia? ¿En serio?'
          }
      }
      if(!pokeValidar.weight){
          validError.weight = '¡Un pokemon pesaba 1000kg! ¿Y el tuyo?'
      }else{
          if(pokeValidar.weight > 1000){
              validError.weight = "¡¿Queriendo generar competencia?! Nao nao, menos peso más altura. El peso no puede ser superior a 1000"
          } else if(pokeValidar.weight < 1){
              validError.weight = '¿Absorbido por un agujero negro o carencia de existencia? ¿En serio?'
          }
      }
      if(pokeValidar.image){
          if (!/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(pokeValidar.image)){
              validError.image = 'El link de la imagen debe ser una URL'
          }
  
      }else{
          let arrImage = ['https://static3.srcdn.com/wordpress/wp-content/uploads/2021/08/Pok--mon-Fakemon-Tofrug.jpg', 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/186240451/original/9251d84e9bb6b767fde90d5edae11beebee55778.png', 'http://pre03.deviantart.net/133d/th/pre/i/2014/109/8/f/_____incikhtes_by_smiley_fakemon-d7f4mv8.png', 'https://e7.pngegg.com/pngimages/903/707/png-clipart-smiley-insect-smiley-miscellaneous-smiley.png','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f41a008-c917-4bb7-9c1f-d4f97b89670f/d7vu3mz-3607dfa6-2cb6-429c-ba5c-14524a3ab2fb.jpg/v1/fill/w_1024,h_993,q_75,strp/manticora_fakemon_by_fer_gon_d7vu3mz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTkzIiwicGF0aCI6IlwvZlwvNWY0MWEwMDgtYzkxNy00YmI3LTljMWYtZDRmOTdiODk2NzBmXC9kN3Z1M216LTM2MDdkZmE2LTJjYjYtNDI5Yy1iYTVjLTE0NTI0YTNhYjJmYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.9yFUn36xP4sm_pMLmPluqRXKvMgpQJkOzbaZ-168rhM']

          let setIndex = Math.round(Math.random() * 4)

          pokeValidar.image = arrImage[setIndex]
          setInput({...input, image: pokeValidar.image})

      }
      if(pokeValidar.types.length === 0 || pokeValidar.types.length > 2){
          validError.types = 'Pon hasta un máximo de dos tipos'
      }
      
      setError(validError)
      handleDisable(validError)
  }

  const handleDisable = (error)=>{

      // if(!error.name && !error.attack && !error.image && !error.defense && !error.height && !error.weight && !error.speed && !error.hp){
      //     setDisEna(true)
      // }
      // else{
      //     setDisEna(false)
      // }

     if(error?.name === undefined &&
      error?.attack === undefined &&
      error?.defense === undefined &&
      error?.speed === undefined &&
      error?.hp === undefined &&
      error?.height === undefined &&
      error?.weight === undefined &&
      error?.types === undefined
      ){
          setDisEna(true)
     }else{
      setDisEna(false)
     }

  }


  return(
      <div id={'div_externo_create'}>
      <div id={'div_interno_create'}>
          <h3>¡Crea tu Pokemon!</h3>
          <br/>
      <form onSubmit={ e => handleSubmit(e)} id={'formulario'}> 
      
      <div id={'div_nombre'}>
          <label>Nombre: </label>
              <input type={'text'} placeholder={'Ej: chicapu'} name={'name'} value={input.name} onChange={ (e) => handleOnChange(e)}/>
              <p>{error.name}</p>
          <br/>
      </div>
      
      <div id={'div_imagen'}>
              <label>Imagen: </label>
              <label><input type={'text'} placeholder={'Ej: https://m.apkpure.com/it/pokemon-wallpaper-hd/com.khd.pokemonwallpapers'} name={'image'} value={input.image} onChange={ (e) => handleOnChange(e)}/> url </label>
              <br/>
              <br/>
              <br/>
              <img src={input.image? input.image : "https://cdn.vox-cdn.com/thumbor/IhuPwFLVg19jF8B6rSmpy5T1-tY=/0x0:1920x1080/1400x788/filters:focal(807x387:1113x693):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53254027/who_pokemon.0.jpg"} alt=''></img>
              <p>{error.image}</p>
              {
                  input.image? <p>Este es un Pokemon de ejemplo</p> : <p>¿Quién es ese pokemon?</p>
              }
           </div>
          
          
          <div id={'datos_poke1'}>
             
              <label>Ataque: </label>
              {/* <input type={'number'} placeholder={'Ej: 40'} name={'attack'} value={input.attack} onChange={ (e) => handleOnChange(e)}/> */}
              <input type={'range'} min='1' max='255' name={'attack'} value={input.attack} onChange={ (e) => handleOnChange(e)}/>
              <p>{input.attack}</p>
              {/* <p>{error.attack}</p> */}
          <br/>

              <label>Defensa: </label>
              {/* <input type={'number'} placeholder={'Ej: 65'} name={'defense'} value={input.defense} onChange={ (e) => handleOnChange(e)}/> */}
              <input type={'range'} min='1' max='255' name={'defense'} value={input.defense} onChange={ (e) => handleOnChange(e)}/>
              <p>{input.defense}</p>
              {/* <p>{error.defense}</p> */}

          <br/>

              <label>Velocidad: </label>
              {/* <input type={'number'} placeholder={'Ej: 55'} name={'speed'} value={input.speed} onChange={ (e) => handleOnChange(e)}/> */}
              <input type={'range'} min='1' max='255' name={'speed'} value={input.speed} onChange={ (e) => handleOnChange(e)}/>
              <p>{input.speed}</p>
              {/* <p>{error.speed}</p> */}

          <br/>
          </div>
          <div id={'datos_poke2'}>

              <label>Vida: </label>
              {/* <input type={'number'} placeholder={'Ej: 70'} name={'hp'} value={input.hp} onChange={ (e) => handleOnChange(e)}/> */}
              <input type={'range'} min='1' max='255' name={'hp'} value={input.hp} onChange={ (e) => handleOnChange(e)}/>
              <p>{input.hp}</p>
              {/* <p>{error.hp}</p> */}

          <br/>
          
 
              <label>Peso: </label>
              <label><input type={'number'} placeholder={'Ej: 23'} name={'weight'} value={input.weight} onChange={ (e) => handleOnChange(e)}/> kg </label>
              <p>{error.weight}</p>
       
          <br/>
        
              <label>Altura: </label>
              <label><input type={'number'} placeholder={'Ej: 16'} name={'height'} value={input.height} onChange={ (e) => handleOnChange(e)}/> m </label>
              <p>{error.height}</p>
       
          <br/>
         
           </div>
          <div id={'div_tipos'}>
              <label>Tipos: </label>
              <select onChange={ (e) => handleTypes(e)}>
                  {
                      tipos?.map((ty) =>{
                          return(
                              <option name={ty.id} value={ty.id}>{ty.type}</option>
                          )
                      })
                  }
              </select>
              {/* {
                  tipos?.map((ty)=>{
                      return(
                          <button type='submit' name={ty.id} value={ty.id}>{ty.name}</button>
                      )
                  })
              } */}
                 
                      {
                      input.types?.map(curr => {
                          return(
                              <CardTypes key={curr} idT={curr} nameT={tipos[curr - 1].type} input={input} set={setInput} validador={validaciones}/>
                          )
                      })
                      
                      }
                 

              <p>{error.types}</p>
         
          
          <br/>
          </div>
      <br/>
          <br/>
          <div id={'div_crear'}>
          <button disabled={!disEna && "disabled"} type={'submit'}><svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>Crear Pokemon</button>
      {
  !disEna? <p>Boton deshabilitado. Revise todos los campos</p> : <p></p>
  }
      </div>
      </form>
      <br/>
      
      <div id={'volver'}>
          <Link to= '/'><button>
<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
<span>Volver</span>
</button></Link>
      </div>
      
      </div>
      </div>
  )



}