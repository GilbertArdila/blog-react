import axios from 'axios'
import {API} from './Api'

const baseURL=API;
const AXIOS=axios.create({baseURL});

export{AXIOS};