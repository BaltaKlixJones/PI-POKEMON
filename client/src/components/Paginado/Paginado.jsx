import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './Paginado.css'
import { currentPage } from "../../redux/actions";



export default function Paginado({pokePage, allPokes}){
    
    const dispatch = useDispatch()
    const page = useSelector((state)=> state.currPage)
    const numPage = []

    // let indexPage = numPage.indexOf(page)
    
    let total = Math.ceil(allPokes/pokePage)
    
    
    for(let i = 1; i <= Math.ceil(total); i++){
        numPage.push(i)
    }
    
    // Estableciendo paginado bonito

    let indexMedPage = numPage.indexOf(page)

    let newPages = 0

    if(indexMedPage === 0 || indexMedPage === 1){

        newPages = numPage.slice(0, 5)

    }else if(indexMedPage === (total - 2) || indexMedPage === (total - 1)){

        newPages = numPage.slice(total - 5, total)

    }else{
    
        let separDes = indexMedPage + 3
        let separAnt = indexMedPage - 2
    
        newPages = numPage.slice(separAnt, separDes)
    }

    return(
    <div id={'pag_div_externo'}>
            <div id={'pag_div_botones'}>

                    <button id={'prevB'} onClick={(e) => dispatch(currentPage(page - 1))} disabled={page === 1? true: false}>Prev</button>
                {newPages && newPages.map(number => (

                    <button id={page === number? 'selected' : 'buttonP'} onClick={()=> dispatch(currentPage(number))}>{number}</button>
                    
                
                ))}

                    <button id={'nextB'} onClick={(e) => dispatch(currentPage(page + 1))} disabled={page === total? true: false}>Next</button>
            
            </div>
    </div>

    )    

}