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
    debugger;
    let totalData;
    let lastpageCheck = action.items.page
    if(lastpageCheck === 1){
     totalData = action.items.Search
     lastpageCheck = lastpageCheck + 1

    } else {
        totalData = [...state.apiData,...action.items.Search]
        if(totalData.length < action.items.totalResults){
            lastpageCheck = lastpageCheck + 1
         } else {
            lastpageCheck = null  
         }
    }
    return {
        ...state,
        isLoading:false,
        apiData:totalData,
        totalCountForSearchedData:action.items.totalResults,
        selectedScreen:SCREEN.SEARCH_LIST,
        lastPage:lastpageCheck,
        lastSearchText:action.items.title,
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
        lastSearchText:action.items.title,
        lastPage:action.items.page ? action.items.page : state.lastPage
    }
}


default:
return {...state,isLoading:false,selectedScreen:SCREEN.SEARCH}
}

}

