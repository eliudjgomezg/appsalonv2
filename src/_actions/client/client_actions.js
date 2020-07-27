import axios from 'axios';
import { REGISTER_CLIENT, LIST_CLIENT, ADD_HAIRCUT } from './types';

import { USER_SERVER } from './../../components/Config';


export function registerClient(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/client/saveClient`, dataToSubmit)
    .then(response => response.data);

    return{
        type:REGISTER_CLIENT,
        payload:request
    };
}

export function listClient(){
    const request = axios(`${USER_SERVER}/client/listClient`)
    .then(response => response.data);

    return{
        type:LIST_CLIENT,
        payload:request
    }
}


export function addHairCut(dataSubmit){
    const request = axios.post(`${USER_SERVER}/haircut/saveHair`, dataSubmit)
    .then(response => response.data);

    return {
        type:ADD_HAIRCUT,
        payload:request
    }

}