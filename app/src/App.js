import React, { useEffect } from 'react';
import './App.css';
import NavigationComponent from './components/navBar'
import SearchScreen from './screens/search'
import MoviesScreen from './screens/Movies'
import MyContent from './screens/MyContent'
import Screen from './constants'
import Loader from './components/loader';
import {connect} from 'react-redux'



function App(props) {

useEffect(()=>{
  console.log('-------->>>>>',props)
},[props])
  const {isLoading,apiData,selectedScreen} = props.data.api

  console.log('-------->>>>> DATA',apiData)

  return (
    <>
    <div className="divCss"/>
    <div className="App">
      <NavigationComponent/>
      <div className="rootContainer">
      {isLoading && <Loader/>}
      {!isLoading && selectedScreen === Screen.SEARCH && <SearchScreen/>}
      {!isLoading && selectedScreen === Screen.SEARCH_LIST && <MoviesScreen/>}
      {/* {!isLoading && selectedScreen === Screen.DETAIL &&<MovieDetail/>} */}
      {!isLoading && selectedScreen === Screen.MY_CONTENT &&<MyContent/>}
      </div>
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
