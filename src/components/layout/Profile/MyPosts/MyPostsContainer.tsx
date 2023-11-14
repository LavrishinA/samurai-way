import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPost, ProfilePage, updatePostBody} from "../../../../redux/posts-reducer";
import {Store} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToProps = {
    profilePage: ProfilePage
}
type MapDispatchToProps = {
    onUpdateText: (postText: string) => void
    onAddPost: () => void
}

export type  Posts = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: Store): MapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onUpdateText: (postText: string) => dispatch(updatePostBody(postText)),
        onAddPost: () => dispatch(addPost())
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

