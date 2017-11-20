import React from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';
import { connect } from 'react-redux';

const Login = props => {
  const submit = values => {
    console.log(values)
    axios.post('https://blog-api-u.herokuapp.com/v1/login', {
      login: {
        email: values.email,
        password: values.password
      }
    })
      .then(function (response) {
        console.log('response', response)
        props.login(response.data)
      })
      .catch(function (error) {
        console.log('error', error)
        props.errorLogin()
      })
  }
  return (
    <div>
      <h2>Login</h2>
      <p>
        {props.mensaje.mensaje}
      </p>
      <LoginForm onSubmit={submit} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    mensaje: state.userStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    establecerToken: data => {
      dispatch({
        type: 'LOGIN',
        data
      })
    },
    errorLogin: () => {
      dispatch({
        type: 'USER_ERROR'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)