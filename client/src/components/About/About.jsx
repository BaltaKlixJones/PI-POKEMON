import React from "react";
import { useState } from "react";
import "./About.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
     const [isOpen2 , setIsOpen2] = useState(false)

     const preventScrolling = (e) => {
        e.preventDefault();
      };
      const toggleBox = () => {
        setIsOpen2(!isOpen2);
      };

     useEffect(() => {
        if(isOpen2) {
            document.body.addEventListener("touchmove", preventScrolling, {
                passive : false
            })
        } else {
            document.body.removeEventListener("touchmove", preventScrolling)
        }
     }, [isOpen2])


    return (
        <div>

            <button className="btnAbout" onClick={() => setIsOpen2(!isOpen2)}>About</button>
            
                {isOpen2 &&
            //     <div className="info" > 
            //     <h1>Sobre mi</h1>
            // <p>
            //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim veritatis, quia veniam dolorem nemo recusandae magni, voluptates accusantium eum ea corporis saepe maxime vitae, consequuntur atque sed quam quas!
            // </p>
            // </div>
            <div className="modal-overlay">
          <div className="modal-content">
            <button className="btnX" onClick={() => setIsOpen2(false)}>❌</button>
            <br />
            <h4>Bienvenidos a la página de Pokemones, un sitio creado especialmente para el proyecto individual de Soy Henry. Aquí podrás encontrar todo lo relacionado con los criaturas más populares de la franquicia de Pokemon.Podrás encontrar información sobre los más populares Pokemones en el mundo Pokemon. Además, ¡podrás crear el pokemon que tu desees! .¡Explora este mundo y descubre todo lo que tienes que saber sobre tus Pokemones favoritos!</h4>
            <h3>Creador de la pagina Baltasar Klix Jones</h3>
            <a href="https://github.com/BaltaKlixJones" target="_blank">
            <img style={{ margin: "20px" ,height:"80px"}} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo"/>
            </a>
           
            <a href="https://www.linkedin.com/in/baltasar-klix-jones-180b38256/">
            <img style={{margin: "20px" ,height:"80px"}} src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png" alt="LinkedIn Logo"/>
            </a>
        </div>
        </div>
             }
        </div>
            
    )

    
}