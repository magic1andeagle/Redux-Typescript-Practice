export interface TodoState {
    todos: any[];
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

export interface fetchTodoAction {
    type: TodoActionTypes.FETCH_TODO
}

export interface fetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: any[]
}

export interface fetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR,
    payload: string
}

export interface setTodoPageAction {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number
}

export type TodoAction = fetchTodoAction | fetchTodoSuccessAction | fetchTodoErrorAction | fetchTodoErrorAction | setTodoPageAction