import React, { useEffect, useState } from 'react';
import './style.css';
import store from '../../reducers/store'
import {fetchTitleDetail} from '../../actions/search'



function MovieCell(props) {

    const {movieObj} = props 
    const [updateNow, setUpdateNow] = useState(true)

    let keyVal = localStorage.getItem("KEY_VAL_CONTENT");
    if(keyVal){
        keyVal = JSON.parse(keyVal)
    } else {
        keyVal = {}
    }

    let buttonName = keyVal.hasOwnProperty(movieObj.imdbID) ? "Remove From My Content" : 'Add To My Content'

    debugger;
    return (
    <div ref={props.reference ? props.reference : null} id ={props.keyword} key={props.keyword} className="card zoom" style={{"width":"350px",
    "height":"auto","marginTop":'20px'}} onClick={()=>{
        // store.dispatch(fetchTitleDetail(movieObj.Title))
    }}>
    <img className="card-img-top" src={movieObj.Poster !== 'N/A' ? movieObj.Poster : 'http://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png'} alt="Card image" style={{"width":"100%",height:'300px'}}/>
    <div className="card-body">
      <h4 className="card-title">{movieObj.Title}</h4>
      <p className="card-text">TYPE - {movieObj.Type}</p>
      <p className="card-text">Release year - {movieObj.Year}</p>
      <button className="btn btn-outline-dark stretched-link" onClick={(e)=>{
          e.stopPropagation();
          saveListInLocalStorage(movieObj)
          props.refreshParent ? props.refreshParent() : setUpdateNow(!updateNow)
        }}>{buttonName}</button>
    </div>
  </div>
    );
}

function saveListInLocalStorage(movieModel){

    let key = 'MY_CONTENT'
    let list = localStorage.getItem(key);
    if(list){
        list = JSON.parse(list)
        var filteredListE = list.filter(e=>{
            return e.imdbID === movieModel.imdbID
        })
        //REMOVE MOVIES
        if (filteredListE.length > 0) {
            const filteredList = list.filter(e=>{
                return e.imdbID !== movieModel.imdbID
            })
            let movieOb = filteredListE[0];
            list = JSON.stringify(filteredList)
            localStorage.setItem(key,list)
            let keyVal = JSON.parse(localStorage.getItem("KEY_VAL_CONTENT"));
            if (keyVal.hasOwnProperty(movieOb.imdbID)){
                delete keyVal[movieOb.imdbID]; 
            }
            keyVal = JSON.stringify(keyVal)
            localStorage.setItem("KEY_VAL_CONTENT",keyVal)
            return
        };
        list.push(movieModel)
    } else {
        list = [movieModel]
    }
    list = JSON.stringify(list)
    localStorage.setItem(key,list)
    let keyVal = localStorage.getItem("KEY_VAL_CONTENT");
    if(keyVal){
        keyVal = JSON.parse(keyVal)
        keyVal[movieModel.imdbID] = true 
    } else {
        keyVal = {}
        keyVal[movieModel.imdbID] = true 
    }
    keyVal = JSON.stringify(keyVal)
    localStorage.setItem("KEY_VAL_CONTENT",keyVal)


}


  export default MovieCell;