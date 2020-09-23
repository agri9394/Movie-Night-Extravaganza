import React, { useEffect,useState } from 'react';
import Loader from '../../components/loader';
import Dropdown from '../../components/dropDown';
import './style.css';
// import store from './reducers/store'
import {connect} from 'react-redux'

function SearchScreen(props) {

    const [isLoading,setLoading] = useState(false)

useEffect(()=>{
  console.log('-------->>>>>',props)
},[props])

  return (
    <div className='rootSearchContainer'>
    {isLoading && <Loader/>}
    {!isLoading && 
    <>
    <p className='setFont'>Movie Night Extravaganza</p>
    <div className='dropDownAndtext marginBottom'>
    <Dropdown/>
    <input placeholder="Search Movies | Series | Episodes" type="text" class="form-control form-control-lg"/>
    </div>
    <button type="submit" class="btn btn-dark" onClick={()=>{
        setLoading(true)
    }}>Search</button>
    </>}
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
      data:state
  }
}

export default connect(mapStateToProps)(SearchScreen);
