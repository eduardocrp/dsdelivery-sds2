import axios from "axios";

const API_URL = 'https://eddev-sds2.herokuapp.com'

export function fetchOrders(){
    return axios(`${API_URL}/orders`);
}