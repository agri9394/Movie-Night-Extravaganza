import SCREEN from '../constants/screen'
import searchPagination from '../utilites/searchPagination'
export default function api(state=[],action){

switch(action.type)
{
case 'SHOWLOADER':{
    return{...state,
    isLoading:true
    }
}

case "SEARCH_RESPONSE":{  
    //Error handling 
    if(action.items.Response === "False"){
        return {
            ...state,
            isLoading:false,
            apiData:[],
            selectedScreen:SCREEN.SEARCH,
            lastPage:null,
            lastSearchText:""
        }
    }
    //Handle Success State for Search Pagination
    return searchPagination(state,action)
}

case "ITEM_DETAIL_SUCCESS":{
    console.log('HIT***API***REUDCER',action)
    return {
        ...state,
        isLoading:false,
        titleDetail:action.items,
        selectedScreen:SCREEN.DETAIL
    }
}

case "SCREEN_NAME":{
    return {
        ...state,
        selectedScreen:action.items
    }
}

default:
return {...state,isLoading:false,selectedScreen:SCREEN.SEARCH}
}

}

