import {
    USUARIO_AUTENTICADO,
    CERRAR_SESION
} from './types';
import axios from 'axios';


export const singup = (first_name, last_name, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({
        first_name,
        last_name, 
        email, 
        password, 
        re_password 
    })

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
        if (res.status === 201) {
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: res.data
            })
        } else {
            dispatch({
                type: CERRAR_SESION
            })
        }
    
    } catch (error) {
        dispatch({
            type: CERRAR_SESION
        })
        
    }
}