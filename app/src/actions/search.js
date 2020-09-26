import axios from 'axios'
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

export function searchWithTitle(title,page = 1) {
    return (dispatch) => {
        debugger;
        if(page === 1){dispatch(showLoader())}
        serviceCall(`&s=${title}&page=${page}`)
       .then((response) => {
        console.log('---> RESPONSE**',response)
        debugger;
        if (response && response.data){
            dispatch(returnAction("SEARCH_RESPONSE",{...response.data,title,page}))
        } else {
            dispatch(returnAction("SEARCH_RESPONSE",{})) 
        }
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

export function itemsFetchDataSuccess(items) {
    return {
        type: 'SEARCH_RESPONSE',
        items
    };
}



export function itemsDetailSuccess(items) {
    return {
        type: 'ITEM_DETAIL_SUCCESS',
        items
    };
}

function returnAction(type,items){
    return {
        type: type,
        items
    };
}