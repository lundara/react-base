import axios from 'axios';

const service = {
    getUsers: (username, status) => {
        return new Promise(async (resolve, reject) => {
            axios.get(`https://jsonplaceholder.typicode.com/users`).then(r => {
                resolve(r.data)
            }).catch(e => {
                reject(e);
            });
        });
    },
};

export default service;