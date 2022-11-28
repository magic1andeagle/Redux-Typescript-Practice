import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionsTypes } from "../../types/user"


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionsTypes.FETCH_USERS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.data)
            setTimeout(() => {
                dispatch({type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: response})
            }, 500)
        } catch (error) {
            dispatch({type: UserActionsTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'})
        }
    }
}