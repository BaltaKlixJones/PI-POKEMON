import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import { getPokemones, filterPokemonesbyType, orderA_Z, getTypes, creApiFilt} from "../../redux/actions";
import {Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {  useEffect } from "react";
import "./Home.css"



export default function Home(){
        const dispatch = useDispatch()
        // const allPokemons = useSelector((state) =>state.pokemones)

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
        // e.preventDefault()
        dispatch(filterPokemonesbyType(e.target.value))
    }
    // let arrEmojis = [
    //     "hola"
    // ]

    return (

        <div id={'home'} >
            
            <br />
           <Link to="/create">
            <div className="btnCrearhome">
           <h5>Crear pokemon</h5>
           </div>
           </Link>
           <select onChange={(e) => handleOrderAZ(e)}>
           
                    <option value={'asc'}>A-Z</option>
                    <option value={'desc'}>Z-A</option>
                </select>
                <select onChange={(e) => handleCreApi(e)}>
                <option value={'allPoke'}>Todos</option>
                <option value={'apiPoke'}>API</option>
                <option value={'dbPoke'}>Creados</option>
            </select>

            <select 
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
            
            <h1>Pokemones</h1>
            <NavBar/>
            <br/>
            <div  >
                
            <Cards/>
            </div>
           
        </div>
    )
}



// style="display:flex; flex-wrap: wrap"