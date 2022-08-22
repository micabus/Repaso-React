// RECIBE UN ARREGLO DE OBJ, LOS MAPEA
// Y LOS RENDERIZA EN UNA CARD POR CADA UNO.
import React from "react";
import Card from "./Card";

export default function Cards({ personajes }){
    
    // personajes, es un estado global. Hay que mapearlo,
    // y por cada elemento hay que renderizar una card. 
    return (
        <div className='container'>
            {personajes.length > 0 ? (
              personajes.map((element) => (
                <div key={element.id} className='cont'>
                  <Card 
                    name={element.name} 
                    species={element.species}
                    image={element.image}
                    id={element.id}
                  />
                 </div>
                ))
            ) : (
                    <h2>No hay personajes para mostrar</h2>
                )}
        </div>
    ); 
}; 
 