import axios from "axios";
import {base_url} from "./../data/Data"

export async function getAllproducts(){
    let result; 
    result = axios(base_url + "products" ).then((res) => {
        return res.data
    })
    return result; 
}