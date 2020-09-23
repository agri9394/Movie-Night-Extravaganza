import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationComponent from './components/navBar'
import Loader from './components/loader'
import SearchScreen from './screens/search'
import store from './reducers/store'
import {hitAPI} from './actions/api'
import {connect} from 'react-redux'



function App(props) {

useEffect(()=>{
  console.log('-------->>>>>',props)
},[props])

  return (
    <>
    <div className="divCss"/>
    <div className="App">
      <NavigationComponent/>
      <SearchScreen/>
    </div>
    </>
  );
}

const mapStateToProps = (state) =>{
  return{
      data:state
  }
}

export default connect(mapStateToProps)(App);
