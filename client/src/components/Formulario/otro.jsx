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
          validError.name = "Debe tener un nombre"
      } else{
         if(/\s/.test(pokeValidar.name)){
          validError.name = 'No se permiten espacios'
         }
         if(/[0-9]/.test(pokeValidar.name)){
          validError.name = "Solo letras por favor"
         }
         if(/\W/.test(pokeValidar.name)){
          validError.name = 'No se permiten carácteres especiales'
         }
      }
      if(!pokeValidar.attack){
          validError.attack = 'Necesita tener ataque'
      }else{
          if(pokeValidar.attack > 255){
              validError.attack = "El ataque no puede ser mayor a 255"
          } else if(pokeValidar.attack < 1){
              validError.attack = 'No puede ser un numero negativo'
          }
      }
      if(!pokeValidar.defense){
          validError.defense = 'Necesita una defensa'
      }else{
          if(pokeValidar.defense > 255){
              validError.defense = "La defensa no puede ser mayora a 255"
          } else if(pokeValidar.defense < 1){
              validError.defense = 'Tiene que ser mayor a 1 '
          }
          
      }
      if(!pokeValidar.speed){
          validError.speed = 'Necesita velocidad'
      }else{
          if(pokeValidar.speed > 255){
              validError.speed = "La velocidad no puede ser mayora a 255"
          } else if(pokeValidar.speed < 1){
              validError.speed = 'Debe ser mayor a 1'
          }
   
      }
      if(!pokeValidar.hp){
          validError.hp = 'Debe tener vida'
      }else{
          if(pokeValidar.hp > 255){
              validError.hp = "La vida no puede ser mayora a 255"
          } else if(pokeValidar.hp < 1){
              validError.hp = 'La vida debe ser mayor a 1'
          }
      }
      if(!pokeValidar.height){
          validError.height = 'Algo esta mal ...'
      }else{
          if(pokeValidar.height > 40){
              validError.height = "La altura no puede superar los 40 metros"
          } else if(pokeValidar.height < 1){
              validError.height = 'Algo esta mal ...'
          }
      }
      if(!pokeValidar.weight){
          validError.weight = 'Algo esta mal ...'
      }else{
          if(pokeValidar.weight > 1000){
              validError.weight = "El peso no puede ser superior a 1000"
          } else if(pokeValidar.weight < 1){
              validError.weight = 'Algo esta mal ...'
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
                              <option name={ty.name} value={ty.type}>{ty.type}</option>
                          )
                      })
                  }
              </select>
                 
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
  !disEna? <p>Revise todos los campos</p> : <p></p>
  }
      </div>
      </form>
      <br/>
      
      <div id={'volver'}>
          <Link to= '/home'><button>
<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
<span>Volver</span>
</button></Link>
      </div>
      
      </div>
      </div>
  )



}