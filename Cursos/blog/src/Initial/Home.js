import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Pagination from '../Pagination'

class Home extends Component {
  componentDidMount(){
    this.props.dispatch1();
  }
  componentWillUnmount(){
    this.props.clear();
  }
  allPosts = () => {
    const Posts = this.props.allPosts.map((post) => {
      return (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      )
    })
    return Posts;
  }
  render(){
    const content = this.allPosts().length > 0 ? this.allPosts() : <div>Loading...</div>;
    return (
      <div>
        <h2>Home</h2>
        <Pagination />
        {content}
      </div>
    )
  }
}

/*const Home = (props) => {
  const Posts = props.allPosts.map((post) => {
    return (
      <div key={post.id}>
        <h2>{post.title}</h2>
      </div>
    )
  })
  return (
    <div>
      <h2>Home</h2>
      {Posts}
    </div>
  )
}*/

const mapStateToProps = state => {
  return {
    allPosts: state.allPosts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch1: () => {
      axios.get('https://blog-api-u.herokuapp.com/v1/posts')
        .then(function(response) {
          dispatch({
            type: "DATA_LOADED",
            data: response.data
          })
        })
        .catch(function(error){
          console.log(error)
        })
    },
    clear: () => {
      dispatch({
        type: "CLEAR_DATA"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);