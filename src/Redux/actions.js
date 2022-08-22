export const GET_CHARACTERS = "OBTENER LOS PERSONAJES"; 
export const ADD_FAVORITE = "AGREGAR UN FAVORITO"; 
export const REMOVE_FAVORITE = "ELIMINAR UN FAVORITO";



// ACTIONS CREATE 

export function getPersonajes(){
    return function (dispatch){
        return fetch("https://rickandmortyapi.com/api/character")
            .then((respuesta) => respuesta.json())
            .then((respuestaJson) => 
              dispatch({ type: GET_CHARACTERS, payload: respuestaJson.results})
            );
        }; 
}; 
export function addFav(personaje){
    return {
        type: ADD_FAVORITE,
        payload: personaje,
    } 
};
export function removeFav(id){
    return {
        type: REMOVE_FAVORITE,
        payload: id,
    }    
};