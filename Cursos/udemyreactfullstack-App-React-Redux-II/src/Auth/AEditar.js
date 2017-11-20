import React, { Component } from 'react';
import AEditarForm from './AEditarForm.js';
import { connect } from 'react-redux';
import axios from 'axios';

class AEditar extends Component {

    componentWillUnmount(){
        this.props.clear();
    }
    manejoDeDatos = (data) => {
        this.props.editar(data, this.props.edit.id, this.props.login.jwt);
        console.log(this.props.login);
    }
    render () {
        return (
            <div>
                <h4> Editar
                </h4>
                <p>{this.props.mensaje}</p>
                <AEditarForm onSubmit={this.manejoDeDatos}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        edit: state.editPost,
        login: state.login,
        mensaje: state.mensajeEditar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clear: () => {
            dispatch({type: 'CLEAR_EDIT_POST'});
        },
        editar: (data, idPost, token) => {
            console.log(data);
            let config = { 'Authorization': 'Bearer' + token};
            axios.patch(`https://blog-api-u.herokuapp.com/v1/posts/${idPost}`,{
                    post:{
                        title: data.title,
                        body: data.body
                    }
                },
                { headers: config}
            )
            .then(function(response){
                console.log(response);
                dispatch({type: 'EDITED'});
            })
            .catch(function(error){
                console.log(error);
                dispatch({type: 'ERROR_EDITED'});
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AEditar);

