import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Initial/Home';
import Login from './Initial/Login';
import SignUp from './Initial/SignUp';

const Header = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/sign-up'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <h2>
          App React
        </h2>
      </div>
    </Router>
  )
}

export default App;