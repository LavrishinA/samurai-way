import {combineReducers, createStore} from "redux";
import {postsReducer} from "./posts-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type Store = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: postsReducer,
    messagesPage: dialogsReducer
})


export const store = createStore(rootReducer)
