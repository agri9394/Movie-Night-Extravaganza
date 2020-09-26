import React, { useEffect, useState } from 'react';
import './style.css';
import MovieCell from '../../components/MovieCell'
import SubHeader from '../../components/SubHeader'
import {connect} from 'react-redux'


function MoviesScreen(props) {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        console.log('Fetch more list items!');
      }

    const {apiData,totalCountForSearchedData,lastSearchText} = props.data.api
    console.log('>>>>SCREEN',apiData)
    return (
    <>
    <SubHeader totalCountForSearchedData={totalCountForSearchedData} lastSearchText={lastSearchText}/>
    <div className='movieContainer'>
    {apiData.map((e,index)=><MovieCell keyword={index} movieObj={e}/>)}
   </div>
   </>
    );
}

const mapStateToProps = (state) =>{
    return{
        data:state
    }
  }
  
  export default connect(mapStateToProps)(MoviesScreen);