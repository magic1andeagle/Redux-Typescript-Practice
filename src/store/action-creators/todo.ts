import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo"

export const fetchTodo = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODO})
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
                params: {_page: page, _limit: limit}
            }).then(res => res.data)
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response})
            }, 500)
        } catch (error) {
            dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: "Произошла ошибка"})
        }
    }
}