import React from 'react';
import './style.css'
import {connect} from 'react-redux'

function Dropdown() {

  return (
    <div className="dropdown">
    <button type="button" className="btn btn-primary dropdown-toggle buttonSize" data-toggle="dropdown">
     Select a Category
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item" >Movies</a>
      <a className="dropdown-item" >Series</a>
      <a className="dropdown-item">Episodes</a>
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
