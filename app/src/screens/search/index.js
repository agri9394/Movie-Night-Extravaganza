import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/dropDown';
import './style.css';
import store from '../../reducers/store'
import { searchWithTitle } from '../../actions/api'

function SearchScreen() {

    const [search, setSearchText] = useState('')

    return (
        <div className='containerTop'>
            <p className='setFont'>Movie Night Extravaganza</p>
            <div className='dropDownAndtext marginBottom'>
                <Dropdown />
                <input
                    value={search}
                    placeholder="Search Movies | Series | Episodes" onChange={(e) => {
                        setSearchText(e.target.value)
                    }} type="text" className="form-control form-control-lg" />
            </div>
            <button type="submit" className="btn btn-dark" onClick={() => {
                store.dispatch(searchWithTitle(search))
            }}>Search</button>
        </div>
    );
}

export default SearchScreen;
