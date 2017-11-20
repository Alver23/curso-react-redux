import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  agregarTarea = (evento) => {
    if (evento.which === 13) {
      this.props.agregar(evento.target.value, this.props.id)
      evento.target.value = "";
    }
  }

  render() {
    const elementoTareas = this.props.tareas.map((tarea) => {
      return <h2 key={tarea.id}>{tarea.tarea}</h2>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {this.props.informacion}
          <br/>
          <button onClick={this.props.aumentar}>Aumentar</button>
          <button onClick={this.props.disminuir}>Disminuir</button>
          <br/>
          <input type="text" onKeyPress={this.agregarTarea.bind(this)}/>
          <br/>
          {elementoTareas}
          <br/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

// Ingresa como props a nuestro component, tanto como el STATE como los DISPATCH
// internamente hace una subscripcion y un get state
// por lo que constantemente en caso de un cambio en el STATE se actualiza
// o se ejecuta nuevamente
const mapStateToProps = (state) => {
  // return de un objeto JS
  return {
    //informacion: state.cantidad
    informacion: state.numero,
    tareas: state.tareas,
    id: state.id
  }
}

// puede ser una funcion o un objeto. se recomienda utilizar las funciones
// Es un objeto, que asume las funciones internas son ACTION CREATOR
// y que al ingresarlas a nuestro Component las engloba en DISPATCH para que de esta forma
// puedan ser llamadas como DISPATCH
/*const mapDispatchToProps = {
    aumentar: () => {
        return {
            type: 'AUM'
        }
    },
    disminuir: () => {
        return {
            type: 'DIS'
        }
    }
}*/

// funcion
// mapDispatchToProps puede ser tambien una funcion, que tiene disponible
// el dispatch y por lo tanto podemos ejecutarlo dentro de nuestras funciones
const mapDispatchToProps = (dispatch) => {
  return {
    // Aplicando el middleware redux-thunk para poder ejecutar una funcion dispatch, solo se puede hacer si se aplica el redux-thunk
    aumentar: () => {
      dispatch((dispatch) => {
        setTimeout(() => {
          return dispatch({
            type: 'AUM'
          })
        }, 2000)
      });
    },
    /*aumentar: () => {
      dispatch({
        type: 'AUM'
      })
    },*/
    disminuir: () => {
      setTimeout(() => {
        dispatch({
          type: 'DIS'
        })
      }, 5000)
    },
    agregar: (tarea, id) => {
      dispatch({
        type: 'ADD',
        tarea,
        id
      })
    }
  }
}
// connect nos permite acceder al STATE y hacer dispatch de ACTIONS y ACTIONS CREATOR
export default connect(mapStateToProps, mapDispatchToProps)(App);