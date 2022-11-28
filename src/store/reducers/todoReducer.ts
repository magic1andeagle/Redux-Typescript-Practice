import { fetchTodoAction, fetchTodoErrorAction, fetchTodoSuccessAction, setTodoPageAction, TodoAction, TodoActionTypes, TodoState } from "../../types/todo"

const initState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initState, action: TodoAction) => {
    if (action.type === TodoActionTypes.FETCH_TODO) {
        return {...state, loading: true}
    }
    if (action.type === TodoActionTypes.FETCH_TODO_SUCCESS) {
        return {...state, todos: action.payload, loading: false}
    }
    if (action.type === TodoActionTypes.FETCH_TODO_ERROR) {
        return {...state, error: action.payload}
    }
    if (action.type === TodoActionTypes.SET_TODO_PAGE) {
        return {...state, page: action.payload}
    } else return state
}

export const fetchTodosActionCreator = (): fetchTodoAction => ({type: TodoActionTypes.FETCH_TODO})
export const fetchTodosSuccessActionCreator = (payload: any[]): fetchTodoSuccessAction => ({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: payload})
export const fetchTodosErrorActionCreator = (payload: string): fetchTodoErrorAction => ({type: TodoActionTypes.FETCH_TODO_ERROR, payload: payload})
export const setTodosPageActionCreator = (payload: number): setTodoPageAction => ({type: TodoActionTypes.SET_TODO_PAGE, payload: payload})