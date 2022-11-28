import { fetchUsersAction, fetchUsersErrorAction, fetchUsersSuccessAction, UserAction, UserActionsTypes, UserState } from "../../types/user"

const initState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initState, action: UserAction) => {
    if (action.type === UserActionsTypes.FETCH_USERS) {
        return {...state, loading: true}
    }
    if (action.type === UserActionsTypes.FETCH_USERS_SUCCESS) {
        return {...state, users: action.payload, loading: false}
    }
    if (action.type === UserActionsTypes.FETCH_USERS_ERROR) {
        return {...state, error: action.payload}
    } else return state
}

export const fetchUsersActionCreator = (): fetchUsersAction => ({type: UserActionsTypes.FETCH_USERS})
export const fetchUsersSuccessActionCreator = (payload: any[]): fetchUsersSuccessAction => ({type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: payload})
export const fetchUsersErrorActionCreator = (payload: string): fetchUsersErrorAction => ({type: UserActionsTypes.FETCH_USERS_ERROR, payload: payload})