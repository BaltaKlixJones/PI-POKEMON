import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import { getPokemones, filterPokemonesbyType, orderA_Z, getTypes, creApiFilt, filterVida, filterAttack} from "../../redux/actions";
import {Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {  useEffect } from "react";
import "./Home.css"




export default function Home(){
        const dispatch = useDispatch()
        

        useEffect(()=>{
            dispatch(getTypes())
        },[dispatch])

        const allTypes  = useSelector(state => state.types)

        useEffect(()=>{
            dispatch(getPokemones());
        },[dispatch])

        function handleOrderAZ(e){
            dispatch(orderA_Z(e.target.value))
        }
        function handleCreApi(e){
            dispatch(creApiFilt(e.target.value))
        }

    function handleTypesFilt(e){
        e.preventDefault()
        dispatch(filterPokemonesbyType(e.target.value))
    }
    
    function handleHp (e) {
        dispatch(filterVida(e.target.value))   
    }

    function hanldeAttack(e) {
        dispatch(filterAttack(e.target.value))

    }


    return (

        <div id={'home'} >
            
            <br />
           <Link to="/create">
            <div className="btnCrearhome">
           <h5>Crear pokemon</h5>
           </div>
           </Link>
           <Link to="/home">
           <div className="containerRecarga">
  <button className="reload-button" onClick={"location.reload()"} >
    <i className="fas fa-sync-alt">INICIO</i>
  </button>
</div>
</Link>


           <h3 className="textFilter">Filtrar por:</h3>
           <div className="filtrar">
           
            <select className="btnOrdenar" onChange={(e) => handleOrderAZ(e)}>
                <option value={'asc'}>A-Z</option>
                <option value={'desc'}>Z-A</option>
            </select>
            
            
            <select className="btnCreados" onChange={(e) => handleCreApi(e)}>
                <option value={'allPoke'}>Todos</option>
                <option value={'apiPoke'}>API</option>
                <option value={'dbPoke'}>Creados</option>
            </select>
            

            <select className="btnTipos"
            onChange={e => handleTypesFilt(e)}
            >

                <option value={'All'}>Tipos</option>
        
                {
                    allTypes?.map((curr)=>{
                        return(
                            <option value={curr.type}>{curr.type + ' '}</option>
                        )
                    })
                }
                
            </select> 

            <select className="btnTipos" onClick={(e) => hanldeAttack(e)} >
            
            
            <option value="descA">Ataque mayor a menor</option> 
            <option value="ascA">Ataque menor a mayor</option> 
            </select>

            <select className="btnTipos" onChange={(e)=> handleHp(e)}>
                <option value="All">Vida</option> 
                <option value="hp60">Menor o igual a 60</option> 
                <option value="vidaM">Mayor a 61</option> 

            </select>
            </div >
            <div id={"home"}>
            <h1 className="pokemon-title">🔥 Pokemones 🔥</h1>
            <NavBar/> 
            <br/>
            
               {<Cards /> ? <Cards /> : <h2>No hay nada para mostrar</h2>} 
               </div>
           
            
           
        </div>
    )
}



// style="display:flex; flex-wrap: wrap"