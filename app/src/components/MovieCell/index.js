import React, { useState } from 'react';
import './style.css';


function MovieCell(props) {
    const {movieObj} = props 
    const [updateNow, setUpdateNow] = useState(true)
    const imageURL = movieObj.Poster !== 'N/A' ? movieObj.Poster : 'http://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png'
    
    /**
     * Add Content Button onClick Handler.
     * @param {Event} e button Event
     */
    const onClickCell = (e) => {
        e.stopPropagation();
        props.onClick(movieObj)
        props.refreshParent ? props.refreshParent() : setUpdateNow(!updateNow)
    }

    return (
    <div ref={props.reference ? props.reference : null} id ={props.keyword} key={props.keyword} className="card zoom parentCard" >
    <img className="card-img-top cardImageStyle" src={imageURL} alt="Movie Poster" />
    <div className="card-body">
        <h4 className="card-title">{movieObj.Title}</h4>
        <p className="card-text">TYPE - {movieObj.Type}</p>
        <p className="card-text">Release year - {movieObj.Year}</p>
        <button className="btn btn-outline-dark stretched-link" onClick={onClickCell}>{props.getButtonName(movieObj)}</button>
    </div>
    </div>
    );
}

  export default MovieCell;