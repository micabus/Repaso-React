import React, { useEffect } from "react";
import Cards from "../Dums/Cards";
import { connect } from "react-redux"; 
import { getPersonajes } from "../../Redux/actions"; 
import Nav from "./Nav";


// componentDidMount
function mapStateToProps(state){
    return {
        personajes: state.personajes,
    };
}; 
function mapDispatchToProps(dispatch){
    return{
        getPersonajes: () => dispatch(getPersonajes()),
    };
};
function Home(props){
    // logica si la vamos a usar porque es un componente inteligente.
 useEffect(() => {
  props.getPersonajes(); 
 }, [props]);    

    return (
        <div className="container">
            <Cards personajes={props.personajes}/>
        </div>
    )
}; 


 
export default connect(mapStateToProps, mapDispatchToProps)(Home); 

