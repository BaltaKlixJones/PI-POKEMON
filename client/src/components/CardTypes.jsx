import React from 'react';



export default function CardTypes({idT, nameT, input, set, validador}) {
  
    const clickOnDelete = (e)=>{

        set({
            ...input,
            types: input.types.filter(curr => curr !== idT)
        })
        validador({
            ...input,
            types: input.types.filter(curr => curr !== idT)
        })
        
    }


    return (
        <div>
            <h4>{nameT}</h4>
            <button onClick={(e)=> clickOnDelete(e)}>X</button>
        </div>
    )
}