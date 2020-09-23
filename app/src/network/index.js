import axios from 'axios';

export function serviceCall(url) {
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    return new Promise((resolve, reject) => {

        axios(url)
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
