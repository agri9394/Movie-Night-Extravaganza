import axios from 'axios'
import store from '../reducers/store'
import {serviceCall} from '../network'

export function showLoader() {
return {
    type:"SHOWLOADER",
    payload:true
}
}


export function hitAPI() {
    return (dispatch) => {
        dispatch(showLoader());
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
    };
}

export function searchWithTitle(title,category="") {
    return (dispatch) => {
        dispatch(showLoader());
        serviceCall(`&s=${title}&page=1`)
       .then((response) => {
        console.log('---> RESPONSE**',response)
        debugger;
        if (response && response.data){
            dispatch(itemsFetchDataSuccess(response.data))
        } else {
            dispatch(itemsFetchDataSuccess({})) 
        }
        dispatch(saveLastSearchedText(title));
        })
    };
}

export function fetchTitleDetail(title) {
    return (dispatch) => {
        dispatch(showLoader());
        serviceCall(`&t=${title}&plot=full`)
       .then((response) => {
        console.log('---> RESPONSE**',response)   
        dispatch(itemsDetailSuccess(response.data))
        })
    };
}

// http://www.omdbapi.com/?t=American+Dad!&plot=full

export function itemsFetchDataSuccess(items) {
    return {
        type: 'SEARCH_RESPONSE',
        items
    };
}

export function saveLastSearchedText(items) {
    return {
        type: 'LAST_SEARCHED_TEXT',
        items
    };
}

export function itemsDetailSuccess(items) {
    return {
        type: 'ITEM_DETAIL_SUCCESS',
        items
    };
}
