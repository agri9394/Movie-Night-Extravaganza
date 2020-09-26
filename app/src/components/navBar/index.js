import React, { useEffect,useState } from 'react';
// import store from './reducers/store'
import SCREEN from '../../constants'
import store from '../../reducers/store'
import {updateScreenName} from '../../actions/index'
import {connect} from 'react-redux'

function NavigationComponent(props) {


const {selectedScreen,apiData} = props.data.api

const searchActive = selectedScreen === SCREEN.SEARCH ? 'active' : ''
const myContent = selectedScreen === SCREEN.MY_CONTENT ? 'active' : ''
const lastSearchedActive= selectedScreen === SCREEN.SEARCH_LIST ? 'active' : ''

const dismissNav = () =>{
  if ( document.getElementById('navBarButton') &&  window.innerWidth < 900){
    document.getElementById('navBarButton').click()
  }
}

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="#" className="navbar-brand">Movie Night Extravaganza</a>
    <button id ="navBarButton" type="button" className='navbar-toggler' data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
            <a  onClick={()=>{
                store.dispatch(updateScreenName(SCREEN.SEARCH))
                dismissNav()
              }} className={`nav-item nav-link ${searchActive}`}>Search</a>
            {apiData && apiData.length > 0 &&      <a  onClick={()=>{
                store.dispatch(updateScreenName(SCREEN.SEARCH_LIST))
                dismissNav()
              }} className={`nav-item nav-link ${lastSearchedActive}`}>Last Searched</a>}
      
            <a onClick={()=>{
                dismissNav()
                store.dispatch(updateScreenName(SCREEN.MY_CONTENT))
            }} className={`nav-item nav-link ${myContent}`}>My Content</a>
            <a onClick={()=>{
                dismissNav()
            }} className="nav-item nav-link">Movies</a>
            <a onClick={()=>{
                dismissNav()
            }} className="nav-item nav-link">Series</a>
            <a onClick={()=>{
                dismissNav()
            }} className="nav-item nav-link">Episode</a>
        </div>
        <div className="navbar-nav ml-auto"> 
        <div onClick={()=>{
            dismissNav()
        }} className="nav-item nav-link">Login</div>         
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
