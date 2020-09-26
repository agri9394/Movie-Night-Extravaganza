import SCREEN from '../constants/screen'

export default function searchPagination(state,action){
    let totalData;
    let lastpageCheck = action.items.page
  
    /**
     * (If condition) - Searves data array for first search,
     * (Else condition) -  Searves Data array for same search with paginated results
     */
    if(lastpageCheck === 1){
     totalData = action.items.Search
    } else {
     totalData = [...state.apiData,...action.items.Search]
    }

    lastpageCheck = getLastPage(totalData,action,lastpageCheck)
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

function getLastPage(totalData,action,lastpageCheck) {
    /**
     * (If condition) - Pagination check is updated if results are needed to be fetched on last scroll,
     * (Else condition) - Sets null so on Scroll this value can be checked and further 
     *  pagination requests can be avoided
     */
    if(totalData.length < action.items.totalResults){
        lastpageCheck = lastpageCheck + 1
     } else {
        lastpageCheck = null  
     }
     return lastpageCheck
}