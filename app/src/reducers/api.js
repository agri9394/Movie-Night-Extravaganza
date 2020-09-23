
export default function api(state=[],action){

switch(action.type)
{
case 'SHOWLOADER':{
    return{...state,
    isLoading:true
    }
}

case "HIT_API":{
    console.log('HIT***API***REUDCER',action)
    return {
        ...state,
        isLoading:false,
        apiData:action.items.data
    }
}
default:
return state
}

}