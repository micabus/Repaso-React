import React from 'react';
import './App.css';
import Home from './Componentes/Contenedores/Home';
import Detalle from '../src/Componentes/Contenedores/Detalle';
import Favoritos from '../src/Componentes/Dums/Favoritos';
import Nav from './Componentes/Contenedores/Nav';
import { Route } from "react-router-dom"; 

function App() {
  return (
    <div className='App'>
        <Route  path="/" component={Nav}/> 
        <Route exact path="/home" component={Home}/>
        <Route exact path="/favorites" component={Favoritos}/>
        <Route exact path="/details/:id" component={Detalle}/>
    </div>
  );
}

export default App;
