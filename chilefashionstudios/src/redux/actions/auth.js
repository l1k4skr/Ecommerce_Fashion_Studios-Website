import {

    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
} from './types';
import axios from 'axios';


export const singup = (first_name, last_name, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({
        first_name,
        last_name, 
        email, 
        password, 
        re_password 
    });

    try {
        console.log(process.env.REACT_APP_API_URL)
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
        if (res.status === 201) {
            dispatch({
                type: ACTIVATION_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: ACTIVATION_FAIL
            });
        }
    
    } catch (error) {
        dispatch({
            type: ACTIVATION_FAIL
        });
        
    }
};