import {
    INICIAR_SESION,
    CERRAR_SESION,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    loading: false,
};

export default function auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ACTIVATION_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                isAuthenticated: true,
            };

        case ACTIVATION_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            };

        case INICIAR_SESION:
            return {
                ...state,
                isAuthenticated: true,
                user: payload.user,
            };

        case CERRAR_SESION:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            };

        default:
            return state;
    }
}