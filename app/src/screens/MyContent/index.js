import React, { useEffect, useState } from 'react';
import '../Movies/style.css';
import MovieCell from '../../components/MovieCell'


function MyContent(props) {

    const apiData = fetchMyContentFromLS()
    const [updateNow, setUpdateNow] = useState(true)

    //Refresh List when User removes the Movie from My Content.
    const refreshList = () => {
        setUpdateNow(!updateNow)
    }

    return (
        <>
            <div className='movieContainer'>
                {apiData && apiData.map((e, index) => <MovieCell keyword={index} movieObj={e} refreshParent={refreshList} />)}
            </div>
        </>
    );
}

const fetchMyContentFromLS = () => {
    if (localStorage.getItem('MY_CONTENT')) {
        return JSON.parse(localStorage.getItem('MY_CONTENT'))
    }
}

export default MyContent;