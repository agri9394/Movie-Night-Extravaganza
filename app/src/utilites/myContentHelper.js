import LocalStorageConst from '../constants/localStorage'
/**
 * @export fetchMyContentList Method
 * @return {Array} Returns Parsed List of Movie Object.
 */
export function fetchMyContentList() {
    if (localStorage.getItem(LocalStorageConst.MY_CONTENT_LIST)) {
        return JSON.parse(localStorage.getItem(LocalStorageConst.MY_CONTENT_LIST))
    }
}

/**
 * @export fetchMyContentKV Method
 * @return {Object} Returns Key value (object) of IMdb ids
 */
export function fetchMyContentKV() {
    if (localStorage.getItem(LocalStorageConst.MY_CONTENT_IMDB_IDS)) {
        return JSON.parse(localStorage.getItem(LocalStorageConst.MY_CONTENT_IMDB_IDS))
    }
}

/**
 * @export isMovieObjectExistInLocalStorage Method
 * @return { Object } It can return true | false | undefined
 * True - when the movie Object exist in Local Storage List
 * False - when the movie Object doesnot Exist in the existing List
 * undefined - when the movie List is not defined and not yet initialised 
 */
export function isMovieObjectExistInLocalStorage(movie) {
    if (localStorage.getItem(LocalStorageConst.MY_CONTENT_LIST) && localStorage.getItem(LocalStorageConst.MY_CONTENT_IMDB_IDS)) {
        const movieList = localStorage.getItem(LocalStorageConst.MY_CONTENT_LIST)
        const keyValMovie = localStorage.getItem(LocalStorageConst.MY_CONTENT_IMDB_IDS)
        let parsed_ML = JSON.parse(movieList)
        let parsed_KV_ML = JSON.parse(keyValMovie)
        parsed_ML = parsed_ML.filter((e)=>{
            return  e.imdbID === movie.imdbID
        })
        if(parsed_ML.length > 0 && parsed_KV_ML.hasOwnProperty(movie.imdbID)){
            return true
        }
        return false
    }
}

/**
 * To add/initialise Movie in the Local Storage 
 * @export
 * @param {*} movie
 */
export function addMovieToMyContent(movie) {
    let parsed_ML;
    let parsed_KV_ML;
    if (localStorage.getItem(LocalStorageConst.MY_CONTENT_LIST) && localStorage.getItem(LocalStorageConst.MY_CONTENT_IMDB_IDS)) {
        const movieList = localStorage.getItem(LocalStorageConst.MY_CONTENT_LIST)
        const keyValMovie = localStorage.getItem(LocalStorageConst.MY_CONTENT_IMDB_IDS)
        parsed_ML = JSON.parse(movieList)
        parsed_KV_ML = JSON.parse(keyValMovie)
        
        parsed_ML.push(movie)
        parsed_KV_ML[movie.imdbID] = true
        
        parsed_ML = JSON.stringify(parsed_ML)
        parsed_KV_ML = JSON.stringify(parsed_KV_ML)
    } else {
        parsed_ML = [movie]
        parsed_KV_ML = {}
        parsed_KV_ML[movie.imdbID] = true

        parsed_ML = JSON.stringify(parsed_ML)
        parsed_KV_ML = JSON.stringify(parsed_KV_ML)
    }
    localStorage.setItem(LocalStorageConst.MY_CONTENT_LIST,parsed_ML)
    localStorage.setItem(LocalStorageConst.MY_CONTENT_IMDB_IDS,parsed_KV_ML)
}

/**
 * To remove Movie in the Local Storage 
 * @export
 * @param {*} movie
 */
export function removeMovieToMyContent(movie) {
    let parsed_ML;
    let parsed_KV_ML;
    if (localStorage.getItem(LocalStorageConst.MY_CONTENT_LIST) && localStorage.getItem(LocalStorageConst.MY_CONTENT_IMDB_IDS)) {
        const movieList = localStorage.getItem(LocalStorageConst.MY_CONTENT_LIST)
        const keyValMovie = localStorage.getItem(LocalStorageConst.MY_CONTENT_IMDB_IDS)
        parsed_ML = JSON.parse(movieList)
        parsed_KV_ML = JSON.parse(keyValMovie)
        
        parsed_ML =  parsed_ML.filter((e)=>{
            return  e.imdbID !== movie.imdbID
        })
        delete parsed_KV_ML[movie.imdbID]
        
        parsed_ML = JSON.stringify(parsed_ML)
        parsed_KV_ML = JSON.stringify(parsed_KV_ML)
    }
    localStorage.setItem(LocalStorageConst.MY_CONTENT_LIST,parsed_ML)
    localStorage.setItem(LocalStorageConst.MY_CONTENT_IMDB_IDS,parsed_KV_ML)
}