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

export function itemsFetchDataSuccess(items) {
    return {
        type: 'HIT_API',
        items
    };
}
