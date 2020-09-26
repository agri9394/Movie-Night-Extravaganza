import SCREEN from '../constants'
export default function api(state=[],action){

switch(action.type)
{
case 'SHOWLOADER':{
    return{...state,
    isLoading:true
    }
}

case "SEARCH_RESPONSE":{
    console.log('HIT***API***REUDCER',action)
    return {
        ...state,
        isLoading:false,
        apiData:action.items.Search,
        totalCountForSearchedData:action.items.totalResults,
        selectedScreen:SCREEN.SEARCH_LIST
    }
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
    console.log('HIT***API***REUDCER',action)
    return {
        ...state,
        selectedScreen:action.items
    }
}
case "LAST_SEARCHED_TEXT":{
    console.log('HIT***API***REUDCER',action)
    return {
        ...state,
        lastSearchText:action.items
    }
}


default:
return {...state,isLoading:false,selectedScreen:SCREEN.SEARCH}
}

}

