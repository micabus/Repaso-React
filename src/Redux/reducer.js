// IMPORTAR LAS ACCIONES
import { GET_CHARACTERS, ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";
// ESTADO INICIAL 
let initialState = {
    personajes:[] ,
    favoritos: [] , 
}

// EXPORTAR UN REDUCER QUE TENGA LOGICA PARA LAS ACTIONS

export default function reducer (state = initialState, action){
    switch(action.type){

        case GET_CHARACTERS:
            return {
                ...state,
                personajes: action.payload
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favoritos: [...state.favoritos, action.payload], // O: state.favoritos.concat(action.payload), 
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favoritos: state.favoritos.filter(favoritos => favoritos.id !== action.payload), // devuelve un arreglo filtrado, dejando de lado el filtrado.
            };

        default: 
            return {...state};
    }; 
}; 