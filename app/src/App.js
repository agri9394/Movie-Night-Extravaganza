import React, { useEffect } from 'react';
import './App.css';
import NavigationComponent from './components/navBar'
import SearchScreen from './screens/search'
import MoviesScreen from './screens/Movies'
import MyContent from './screens/MyContent'
import Screen from './constants/screen'
import Loader from './components/loader';
import {connect} from 'react-redux'



function App(props) {

  const {isLoading,selectedScreen} = props.data.search
  return (
    <>
    <div className="divCss"/>
    <div className="App">
      <NavigationComponent/>
      <div className="rootContainer">
      {isLoading && <Loader/>}
      {!isLoading && selectedScreen === Screen.SEARCH && <SearchScreen/>}
      {!isLoading && selectedScreen === Screen.SEARCH_LIST && <MoviesScreen/>}
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
