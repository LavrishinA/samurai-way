import {Actions, ProfilePage} from "./state";

export function postsReducer(state: ProfilePage, action: Actions) {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: String(new Date().getMilliseconds()),
                postText: state.textAreaValue,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.textAreaValue = ""
        return state
        case "UPDATE-TEXT":
            state.textAreaValue = action.payload.postText
        return state
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
