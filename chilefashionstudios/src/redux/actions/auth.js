import {
    INICIAR_SESION,
    CERRAR_SESION,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
} from './types';
import axios from 'axios';


export const singup = (first_name, last_name, email, password, re_password) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

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
                type: INICIAR_SESION,
                payload: res.data
            });
        } else {
            dispatch({
                type: CERRAR_SESION
            });
        }
        
        dispatch({
            type: REMOVE_AUTH_LOADING
        });

    } catch (error) {
        dispatch({

            type: CERRAR_SESION
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }
};

export const activation = (uid, token) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });


    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({
        uid,
        token
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config);
        if (res.status === 204) {
            dispatch({
                type: ACTIVATION_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: ACTIVATION_FAIL
            });
        }
        
        dispatch({
            type: REMOVE_AUTH_LOADING
        });

    } catch (error) {
        dispatch({
            type: ACTIVATION_FAIL
        });
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
    }
}