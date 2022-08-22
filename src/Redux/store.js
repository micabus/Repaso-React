// Herramientas para crear un store con THUNK
    // createStore
    // applyMiddleware
import { createStore, applyMiddleware } from "redux";
    // thunck
import thunk from "redux-thunk";
    // reducer
import reducer from "./reducer";
    //composeWithDevTools
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; 

// reducer recibe: Reducer y Configuraciones del Middleware
