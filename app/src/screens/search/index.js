import React, { useState } from 'react';
import './style.css';
import Dropdown from '../../components/dropDown';
import store from '../../reducers/store'
import { searchWithTitle } from '../../actions/search'

/**
 * Search Component consist of Search textField and Button Action to search movies.
 */
function SearchScreen() {
    const [searchText, setSearchText] = useState('')
    /**
     *On Seach Field Change Action to Save text in local state.
     */
    const onChangeSearchField = (e) => {
        setSearchText(e.target.value)
    }
    /**
     *Search Button Action With Validation For Empty Search
     */
    const onSubmitSearchButton = () => {
        if(searchText && searchText.trim() !== ""){
            store.dispatch(searchWithTitle(searchText))
            return
        }
        alert('Search field is invalid!')
    }


    return (
        <div className='containerTop'>
            <p className='setFont'>Movie Night Extravaganza</p>
            <div className='dropDownAndtext marginBottom'>
                <input
                    value={searchText}
                    placeholder="Search Movies | Series | Episodes" 
                    onChange={onChangeSearchField} 
                    type="text" 
                    className="form-control form-control-lg" />
            </div>
            <button type="submit" className="btn btn-dark" onClick={onSubmitSearchButton}>Search</button>
        </div>
    );
}

export default SearchScreen;
