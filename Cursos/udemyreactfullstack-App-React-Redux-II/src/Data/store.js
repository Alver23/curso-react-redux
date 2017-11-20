import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const allPosts = (state=[], action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'DATA_LOADED':
        //nuevoEstado modificación
        nuevoEstado = action.data;
            return nuevoEstado;
        case 'CLEAR_DATA':
        nuevoEstado = [];
            return nuevoEstado;
        default:
            return state;
    }
}

const userCreated = (state={}, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'USER_CREATED':
            nuevoEstado = {mensaje: "El usuario se creó con éxito"}
            return nuevoEstado;
        case 'USER_ERROR':
            nuevoEstado = {mensaje: "El usuario no se creó o los datos no son correctos"}
            return nuevoEstado;
        default:
            return {};
    }
}

const session = (state= null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'LOGIN':
        nuevoEstado = action.data;
        return nuevoEstado;
        case 'LOGOUT':
        nuevoEstado = null;
        return nuevoEstado;
        default:
            return state;
    }
}

const pagination = (state={total: 1, page: 1}, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'SET_TOTAL':
            nuevoEstado.total = action.total;
            return nuevoEstado;
        case 'SET_CURRENT':
            nuevoEstado.page = action.page;
            return nuevoEstado;
    
        default:
            return state;
    }
}

const showPost = (state={}, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'GET_POST' :
            nuevoEstado = action.data;
            return nuevoEstado;
        case 'CLEAR_POST':
            nuevoEstado = {};
            return nuevoEstado;
        default:
            return state;
    }
}

const errorPost = (state=null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'ERROR_GET_POST' :
        nuevoEstado = "Error al cargar el post";
        return nuevoEstado;
        default:
        return null;
    }
}

const creado = (state=null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'CREATED_':
        nuevoEstado = "El post se creó con éxito";
        return nuevoEstado;
        case 'ERROR_CREATED_':
        nuevoEstado = "El post no se creó";
        return nuevoEstado;
        default:
        return null;
    }
}

const personalPosts = (state=[], action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'PERSONAL_POSTS' :
        nuevoEstado = action.data;
        return nuevoEstado;
        case 'CLEAR_PERSONAL_POSTS':
        nuevoEstado = [];
        return nuevoEstado;
        default:
        return state;
    }
}

const errorPersonalPosts = (state=null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'ERROR_PERSONAL_POSTS':
        nuevoEstado = "No tienes posts, o hubo un error al cargarlos";
        return nuevoEstado;
        default:
        return null;
    }
}

const editPost = (state={}, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'GET_POST' :
            nuevoEstado = action.data;
            return nuevoEstado;
        case 'CLEAR_EDIT_POST' :
            nuevoEstado = {};
            return nuevoEstado;
        default:
            return state;
    }
}

const mensajeEditar = (state = null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'EDITED':
            nuevoEstado = 'El post fue editado correctamente';
            return nuevoEstado;
        case 'ERROR_EDITED':
            nuevoEstado = 'ERROR, el post no fue editado';
            return nuevoEstado;
        default:
            return null;
    }
}

const mensajeEliminar = (state=null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'ELIMINATED':
            nuevoEstado = 'El post fue eliminado';
            return nuevoEstado;
        case 'ERROR_ELIMINATED':
            nuevoEstado = 'ERROR el post no se eliminó';
            return nuevoEstado;
        default:
            return null;
    }
}

const reducer = combineReducers({
    allPosts: allPosts,
    form: formReducer,
    userStatus: userCreated,
    pagination: pagination,
    login: session,
    showPost: showPost,
    errorPost: errorPost,
    creado: creado,
    personalPosts: personalPosts,
    errorPersonalPosts: errorPersonalPosts,
    editPost: editPost,
    mensajeEditar: mensajeEditar,
    mensajeEliminar: mensajeEliminar
});



const store = createStore(reducer);

export default store;
