import {dialogsReducer, sendMessage, updateMessageBody} from "./dialogs-reducer";
import {AddPost, AddText, postsReducer} from "./posts-reducer";

 type Companions = {
    id: string
    name: string
}

 type Posts = {
    id: string
    postText: string
    likeCount: number
}

 type Messages = {
    id: string
    msgText: string
}

type ProfilePage = {
    posts: Posts[],
    textAreaValue: string
}
 type MessagesPage = {
    messages: Messages[]
    companions: Companions[]
    messageBody: string
}
 type Store = {
    profilePage: ProfilePage
    messagesPage: MessagesPage
}




export type Actions = AddPost | AddText | sendMessage | updateMessageBody;

type StoreType = {
    _state: Store,
    _callSubscriber: (state: Store) => void
    addPost: () => void
    updateTextAreaValue: (postText: string) => void
    subscribe: (callback: (state: Store) => void) => void
    getState: () => Store
    dispatch: (action: Actions) => void
}

export const store: StoreType = {
    _state: <Store>{
        profilePage: {
            posts: [
                {id: "1", postText: "Hello INCUBATOR", likeCount: 12},
                {id: "2", postText: "Hello World", likeCount: 12},
            ],
            textAreaValue: "alex"
        },
        messagesPage: {
            messages: [
                {id: "1", msgText: "Hi"},
                {id: "2", msgText: "I am from incubator"},
                {id: "3", msgText: "Let go..."}]
            ,
            companions: [
                {id: "1", name: "Yana"},
                {id: "2", name: "Maks"},
                {id: "3", name: "Sasha"},
                {id: "4", name: "Renato"},
                {id: "5", name: "Michela"},
                {id: "6", name: "Vika"},
            ],
            messageBody: "asd"

        },
    },
    _callSubscriber() {
        console.log("Store updated")
    },
    getState() {

        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
        console.log("Fire")
    },
    addPost() {
        const newPost = {
            id: String(new Date().getMilliseconds()),
            postText: this._state.profilePage.textAreaValue,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.textAreaValue = ""
        this._callSubscriber(this._state)
    },
    updateTextAreaValue(postText: string) {
        this._state.profilePage.textAreaValue = postText
        this._callSubscriber(this._state)
    },
    dispatch(action: Actions) {
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.profilePage = postsReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
    }
}


