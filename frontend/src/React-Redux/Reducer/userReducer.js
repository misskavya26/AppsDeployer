import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_OTP_FAIL, USER_OTP_REQUEST, USER_OTP_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constant/userConstant";

export const userLoginReducer = (state = {}, action) => {

    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {}, action) => {

    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}

export const userOTPReducer = (state = {}, action) => {

    switch (action.type) {
        case USER_OTP_REQUEST:
            return { loading: true }

        case USER_OTP_SUCCESS:
            return { loading: false, userInfo: action.payload, success: true }

        case USER_OTP_FAIL:
            return { loading: false, error: action.payload, success: false }

        default:
            return state;
    }
}

export const userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return { loading: true }

        case USER_PROFILE_SUCCESS:
            return { loading: false, userInfo: action.payload, success: true }

        case USER_PROFILE_FAIL:
            return { loading: false, error: action.payload, success: false }

        default:
            return state;
    }
}