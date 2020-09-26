import axios from 'axios';
import NetworkConstants from './networkConstant'

export function serviceCall(params='') {
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    return new Promise((resolve, reject) => {
        let url = NetworkConstants.BASE_URL;
        axios(url+params)
            .then(response => {
                console.info(`serviceCall, Success response`, response);
                resolve(response);
            })
            .catch(error => {
                console.warn(`***serviceCall***, Error reason`, url, error);
                reject(error.response ? error.response : error);
            });
    });
}
