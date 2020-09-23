import React, { useEffect } from 'react';
// import store from './reducers/store'
import './style.css'
import {connect} from 'react-redux'

function Dropdown(props) {

useEffect(()=>{
  console.log('-------->>>>>',props)
},[props])

  return (
    <div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle buttonSize" data-toggle="dropdown">
     Select a Category
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Movies</a>
      <a class="dropdown-item" href="#">Series</a>
      <a class="dropdown-item" href="#">Episodes</a>
    </div>
  </div>
  );
}

const mapStateToProps = (state) =>{
  return{
      data:state
  }
}

export default connect(mapStateToProps)(Dropdown);
