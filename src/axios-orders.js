import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-burger.firebaseio.com/'
});


export default instance;