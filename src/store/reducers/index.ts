import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    todos: todoReducer
})

export type rootState = ReturnType<typeof rootReducer>
