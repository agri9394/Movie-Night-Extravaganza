import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/dropDown';
import './style.css';
import store from '../../reducers/store'
import { searchWithTitle } from '../../actions/api'

function SearchScreen() {
    const [search, setSearchText] = useState('')
    const onChangeSearchField = (e) => {
        setSearchText(e.target.value)
    }
    const onSubmitSearchButton = () => {
        store.dispatch(searchWithTitle(search))
    }


    return (
        <div className='containerTop'>
            <p className='setFont'>Movie Night Extravaganza</p>
            <div className='dropDownAndtext marginBottom'>
                <Dropdown />
                <input
                    value={search}
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
