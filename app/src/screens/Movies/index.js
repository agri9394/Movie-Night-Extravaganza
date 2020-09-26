import React, { useEffect, useRef, useCallback } from 'react';
import './style.css';
import MovieCell from '../../components/MovieCell'
import {searchWithTitle} from '../../actions/search'
import store from '../../reducers/store'
import SubHeader from '../../components/SubHeader'

import {connect} from 'react-redux'


function MoviesScreen(props) {
  const {apiData,totalCountForSearchedData,lastSearchText,lastPage} = props.data.search
   const observer = useRef()

   const lastMovieReference = useCallback(node=>{
    console.log('SCROLL TO LAST*** firstLine')

    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries=>{
      console.log('SCROLL TO LAST*** isIntersecting',entries[0].isIntersecting)

      if(entries[0].isIntersecting && lastPage !== null){
        debugger;
        store.dispatch(searchWithTitle(lastSearchText,lastPage))
        console.log('SCROLL TO LAST***')

      }
    })
    if(node) observer.current.observe(node)
   })


    return (
    <>
    <SubHeader totalCountForSearchedData={totalCountForSearchedData} lastSearchText={lastSearchText}/>
    <div className='movieContainer'>
      {apiData.map((e,index)=>{ 
        if(apiData.length === index+1){
        
        return <MovieCell reference={lastMovieReference} keyword={index} movieObj={e}/>
        }
        return <MovieCell keyword={index} movieObj={e}/>
      })
   }
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