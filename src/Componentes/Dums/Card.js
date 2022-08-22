import React from "react";
import { Link } from "react-router-dom";

//UNICA TARJETA 

export default function Card(props){
    // sin logica porque es un componente Dums
    return(
    <Link to= {`/details/${props.id}`}>
        <div className='contenedor'>
            <div>
                <h2>{props.name}</h2>
                <h5>{props.species}</h5>
            </div>
            <div>
                <img src={props.image} alt='Imagen del personaje'/>
            </div>
        </div>
    </Link>
    ); 
}; 