import axios from 'axios';
import NetworkConstants from './networkConstant'

export function serviceCall(params='') {
    return new Promise((resolve, reject) => {
        let url = NetworkConstants.BASE_URL;
        axios(url+params)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}
