import React from 'react';
import SignUpFormValidate from  './SignUpFormValidate'
import axios from 'axios';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

const SignUp = (props) => {
  const submit = (values) => {
    // print the form values to the console
    axios.post('https://blog-api-u.herokuapp.com/users', {
      user: {
        name: values.username,
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
      }
    })
      .then(function (response) {
        console.log(response)
        props.success();
      })
      .catch(function (error) {
        props.error();
      })
    console.log(values)
  }
  return (
    <div>
      <h2>Sign Up</h2>
      <p>{props.mensaje.mensaje}</p>
      <SignUpFormValidate onSubmit={submit} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    mensaje: state.userStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    success: () => {
      dispatch({
        type: 'USER_CREATED'
      })
      dispatch(reset('SigUpFormValidate'))
    },
    error: () => {
      dispatch({
        type: 'USER_ERROR'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)