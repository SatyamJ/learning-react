import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://big-kahuna-burger.firebaseio.com'
});

export default instance;