import React, { useEffect } from 'react';
// import store from './reducers/store'
import {connect} from 'react-redux'

function NavigationComponent(props) {

useEffect(()=>{
  console.log('-------->>>>>',props)
},[props])

  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="#" class="navbar-brand">Movie Night Extravaganza</a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
            <a href="#" class="nav-item nav-link active">My Content</a>
            <a href="#" class="nav-item nav-link ">Movies</a>
            <a href="#" class="nav-item nav-link ">Series</a>
            <a href="#" class="nav-item nav-link ">Episode</a>
        </div>
        <div class="navbar-nav ml-auto"> 
        <a href="#" class="nav-item nav-link active">Login</a>         
        </div>
    </div>
</nav>
  );
}

const mapStateToProps = (state) =>{
  return{
      data:state
  }
}

export default connect(mapStateToProps)(NavigationComponent);
