import React from "react";

class Detalle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        detalle: {},
    }; 
  };

  componentDidMount(){
    const { id } = this.props.match.params;
    fetch("https://rickandmortyapi.com/api/character/" + id)
    .then((respuesta) => respuesta.json())
    .then((respuestaJson) => this.setState({ detalle: respuestaJson}));  
  };
    render() {
        return (
            <div> 
                <h1>Detalle</h1>
                <img src= {this.state.detalle.image} alt= {`Imagen de ${this.state.detalle.name}`}/>
                <h3>Nombre: {this.state.detalle.name}</h3>
                <h3>Genero: {this.state.detalle.gender}</h3>
                <h3>Especie: {this.state.detalle.species}</h3>
             </div>
        ); 
    };
}; 

export default Detalle;