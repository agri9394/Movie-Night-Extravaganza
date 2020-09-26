import React, { useRef, useCallback } from 'react';
import './style.css';
import MovieCell from '../../components/MovieCell'
import { searchWithTitle } from '../../actions/search'
import store from '../../reducers/store'
import SubHeader from '../../components/SubHeader'
import { isMovieObjectExistInLocalStorage, addMovieToMyContent, removeMovieToMyContent, fetchMyContentKV } from '../../utilites/myContentHelper'
import { connect } from 'react-redux'


function MoviesScreen(props) {
  const { apiData, totalCountForSearchedData, lastSearchText, lastPage } = props.data.search
  /**
   * The observer and Callback handles the pagination where callback 
   * handles the IntersectionObserver if cell is scrolled to last 
   */
  const observer = useRef()
  const lastMovieReference = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && lastPage !== null) {
        store.dispatch(searchWithTitle(lastSearchText, lastPage))
      }
    })
    if (node) observer.current.observe(node)
  })

  /**
   * This callBack Fuction Handles the Add / Remove content ButtonAction
   */
  const onClickMovieCell = (movieObj) => {
    if (isMovieObjectExistInLocalStorage(movieObj) === undefined || isMovieObjectExistInLocalStorage(movieObj) === false) {
      addMovieToMyContent(movieObj)
    } else if (isMovieObjectExistInLocalStorage(movieObj) === true) {
      removeMovieToMyContent(movieObj)
    }
  }

  /**
   * This method generates the Button Name dynamically on basis of condition.
   */
  const getCellButtonName = (movieObj) => {
    let keyVal = fetchMyContentKV()
    let buttonName = "Add To My Content"
    if (keyVal) {
      buttonName = keyVal.hasOwnProperty(movieObj.imdbID) ? "Remove From My Content" : 'Add To My Content'
    }
    return buttonName
  }

  return (
    <>
      <SubHeader totalCountForSearchedData={totalCountForSearchedData} lastSearchText={lastSearchText} />
      <div className='movieContainer'>
        {apiData.map((movie, index) => {
          if (apiData.length === index + 1) {
            return <MovieCell
              reference={lastMovieReference}
              getButtonName={getCellButtonName}
              keyword={index}
              movieObj={movie}
              onClick={onClickMovieCell} />
          }
          return <MovieCell
            keyword={index}
            movieObj={movie}
            getButtonName={getCellButtonName}
            onClick={onClickMovieCell} />
        })
        }
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(MoviesScreen);