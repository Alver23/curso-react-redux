import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {

  agregarTarea = (evento)=>{
    if(evento.which === 13){
      console.log(evento.target.value);
      this.props.agregar(evento.target.value, this.props.id);
    }
  }


  render() {

    const elementosTareas = this.props.tareas.map((tarea)=>{
      return <h2 key={tarea.id} >  {tarea.tarea}  </h2>
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.props.informacion}
          <br/>
          <button onClick={this.props.aumentar}>Aumentar</button>
          <br/>
          <button onClick={this.props.disminuir}>Disminuir</button>
          <br/>
            <input onKeyPress = {this.agregarTarea.bind(this)}/>
          <br/>
          {elementosTareas}

          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

// Ingresa como props a nuestro Component tanto el STATE como los DISPATCH

// internamente hace una subscripción y un get state
// por lo que constantemente en caso de un cambio en el STATE se actualiza
// o se ejecuta nuevamente
// función
const mapStateToProps = (state)=>{
  // return de un objeto JS
  return {
    // informacion: state.cantidad
    informacion: state.numero,
    tareas: state.tareas,
    id: state.id
  }
}

// Es un objeto, que asume que las funciones internas son ACTION CREATOR
// y que al ingresarlas a nuestro Component las engloba en DISPATCH para que
// de esta forma puedan ser llamadas como DISPATCH
// const mapDispatchToProps = {
//   aumentar: ()=>{return {type: "AUM"}},
//   disminuir: ()=>{return {type: "DIS"}}
// }


// mapDispatchToProps puede ser también una función, que tiene disponible
// el dispatch y por lo tanto podemos ejecutarlo dentro de nuestras funciones
const mapDispatchToProps = (dispatch)=>{
  return {
    aumentar: ()=>{ dispatch(
      (dispatch)=>{
        setTimeout(()=>{
          return dispatch({type: "AUM"})
        }, 3000);
    }
    ); },
    disminuir: ()=>{
      setTimeout(()=>{
        dispatch({type: "DIS"}); 
      }, 5000);
     },
    // disminuir: ()=>{ dispatch({type: "DIS"}); },
    agregar: (tarea, id)=> { dispatch({type: "ADD", tarea, id}) }
  }
}

// connect nos permite acceder al STATE y hacer dispatch de
// ACTIONS y ACTION CREATOR
export default connect(mapStateToProps, mapDispatchToProps)(App);
