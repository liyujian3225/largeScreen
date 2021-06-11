import axios from 'axios'

let instance = axios.create({ timeout: 1000 * 60 * 40});

export default instance;
