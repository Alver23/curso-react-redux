import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Initial/Home.js';
import Login from './Initial/Login.js';
import Signup from './Initial/Signup.js';
import Post from './Initial/Post.js';
import { connect } from 'react-redux';

import AHeader from './Auth/AHeader.js'; 
import AMisPosts from './Auth/AMisPosts.js'; 
import ACrear from './Auth/ACrear.js'; 
import AEditar from './Auth/AEditar.js'; 


const Header = () => {
  return (
    <nav>
      <Link to='/'> Home </Link>
      <Link to='/signup'> Sign Up </Link>
      <Link to='/login'> Login </Link>
    </nav>
  )
}

const App = (props) => {
  console.log(props.login);
  if(props.login!=null){
    return(
      <Router>
        <div> 
          <AHeader/>
          <h2>Aut</h2> 
          <Route exact path="/" component={Home}/>
          <Route exact path="/post/:id" component={Post}/>
          <Route path ="/:user/posts" component={AMisPosts}/>
          <Route path ="/:user/crear" component={ACrear}/>
          <Route exact path ="/:user/post/:id" component={Post}/>
          <Route path ="/:user/post/:id/editar" component={AEditar}/>
        </div>
      </Router>

    )

  } else{
      return (
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/post/:id" component={Post}/>
            <h2>Dentro de App</h2>
          </div>
        </Router>
      )
  }

}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch1: () => {
      // dispatch(actionCreator)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)