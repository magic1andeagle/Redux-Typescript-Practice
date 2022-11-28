export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string
}

// Экшены

export enum UserActionsTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

export interface fetchUsersAction {
    type: UserActionsTypes.FETCH_USERS;
}

export interface fetchUsersSuccessAction {
    type: UserActionsTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

export interface fetchUsersErrorAction {
    type: UserActionsTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = fetchUsersAction | fetchUsersSuccessAction | fetchUsersErrorAction