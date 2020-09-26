import {serviceCall} from '../network'

export function showLoader() {
return {
    type:"SHOWLOADER",
    payload:true
}
}

export function searchWithTitle(title,page = 1) {
    return (dispatch) => {
        if(page === 1){dispatch(showLoader())}
        serviceCall(`&s=${title}&page=${page}`)
       .then((response) => {
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
        dispatch(returnAction('ITEM_DETAIL_SUCCESS',response.data))
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
