import React, { useState } from 'react';
import '../Movies/style.css';
import { fetchMyContentList } from '../../utilites/myContentHelper'
import MovieCell from '../../components/MovieCell'
import { isMovieObjectExistInLocalStorage, removeMovieToMyContent } from '../../utilites/myContentHelper'


function MyContent() {

    const apiData = fetchMyContentList()
    const [updateNow, setUpdateNow] = useState(true)

    /**
    * This method is to refresh the list of MyContent Page when Movie is removed.
    */
    const refreshList = () => {
        setUpdateNow(!updateNow)
    }

    /**
    * This callBack Fuction Handles the Add / Remove content ButtonAction
    */
    const onClickMovieCell = (movieObj) => {
        if (isMovieObjectExistInLocalStorage(movieObj) === true) {
            removeMovieToMyContent(movieObj)
        }
    }

    /**
     * This method generates the Button Name dynamically on basis of condition.
     */
    const getCellButtonName = () => {
        return "Remove From My Content"
    }

    return (
        <>
            <div className='movieContainer'>
                {apiData && apiData.map((e, index) =>
                    <MovieCell
                        keyword={index}
                        movieObj={e}
                        getButtonName={getCellButtonName}
                        refreshParent={refreshList}
                        onClick={onClickMovieCell} />)}
            </div>
        </>
    );
}

export default MyContent;