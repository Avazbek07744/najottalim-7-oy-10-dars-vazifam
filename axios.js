import axios from "axios";
import { getToken } from "./src/utils/utils";

const lord = axios.create({
    baseURL: 'https://api.spotify.com/v1/browse/'
})


lord.interceptors.request.use(config => {
    const authToken = localStorage.getItem('token');
    if (authToken) {
        config.headers.Authorization = `${authToken}`;
    } else {
        getToken();
    const authToken = localStorage.getItem('token');
    config.headers.Authorization = `${authToken}`; 
    }
    return config;
});


export default lord