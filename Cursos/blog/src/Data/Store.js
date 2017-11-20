import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const allPosts = (state = [], action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'DATA_LOADED':
      nuevoEstado = state.concat(action.data);
      return nuevoEstado;
      break;
    case 'CLEAR_DATA':
      nuevoEstado = [];
      return nuevoEstado;
      break;
    default:
      return state;
  }
}

const userCreated = (state = {}, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'USER_CREATED':
      nuevoEstado = {mensaje: "El usuario se creo con exito"}
      return nuevoEstado;
      break;
    case 'USER_ERROR':
      nuevoEstado = {mensaje: "Ha ocurrido un error al crear el usuario o los datos no son correctos"}
      return nuevoEstado;
      break;
    default:
      return {}
  }
}

const session = (state = null, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'LOGIN':
      nuevoEstado = action.data
      return nuevoEstado;
      break;
    case 'LOGOUT':
      nuevoEstado = null
      return nuevoEstado;
      break;
    default:
      return state
  }
}

const pagination = (state = {
  total: 1,
  page: 1
}, action) => {
  var nuevoEstado = Object.assign({}, state);
  switch (action.type) {
    case 'SET_CURRENT':
      nuevoEstado.page = action.page
      return nuevoEstado;
      break;
    default:
      return state
  }
}


const reducer = combineReducers({
  allPosts: allPosts,
  form: formReducer,
  userStatus: userCreated,
  pagination: pagination
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;