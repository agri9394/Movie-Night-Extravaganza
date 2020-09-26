import React, { useEffect } from 'react';
// import store from './reducers/store'
import './style.css'
import {connect} from 'react-redux'

function Loader(props) {

useEffect(()=>{
//   console.log('-------->>>>>',props)
},[props])

  return (
    <div className='loader'/>
  );
}

const mapStateToProps = (state) =>{
  return{
      data:state
  }
}

export default connect(mapStateToProps)(Loader);
