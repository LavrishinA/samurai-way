import {Actions} from "./store";

export type Posts = {
    id: string
    postText: string
    likeCount: number
}

export type ProfilePage = {
    posts: Posts[],
    textAreaValue: string
}

const initialState: ProfilePage = {
        posts: [
            {id: "1", postText: "Hello INCUBATOR", likeCount: 12},
            {id: "2", postText: "Hello World", likeCount: 12},
        ],
        textAreaValue: "alex"
    }

export function postsReducer(state: ProfilePage = initialState, action: Actions): ProfilePage {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: String(new Date().getMilliseconds()),
                postText: state.textAreaValue,
                likeCount: 0
            }

        return {...state, posts: [newPost, ...state.posts], textAreaValue: ""}
        case "UPDATE-TEXT":

        return {...state, textAreaValue: action.payload.postText}
        default:
            return state
    }
}

export type AddPost = ReturnType<typeof addPost>
export type AddText = ReturnType<typeof updatePostBody>

export function addPost() {
    return {
        type: "ADD-POST"
    } as const
}

export function updatePostBody(postText: string) {

    return {
        type: "UPDATE-TEXT",
        payload: {
            postText
        }
    } as const
}
