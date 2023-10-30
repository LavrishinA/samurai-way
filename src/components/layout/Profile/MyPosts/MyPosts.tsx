import React from 'react';
import {Post} from "./Post/Posts";
import styles from "./MyPosts.module.css"
import {Actions, Posts} from "../../../../redux/state";
import {addPost, updatePostBody} from "../../../../redux/posts-reducer";

type MyPostsProps = {
    posts: Posts[]
    textAreaValue: string
    dispatch: (action: Actions) => void
}

export const MyPosts = ({posts, dispatch, textAreaValue}: MyPostsProps) => {

    const textareaValue = React.createRef<HTMLTextAreaElement>()

    const postsForRender = posts.map(p => <Post postText={p.postText} likeCount={p.likeCount}/>)

    const addNewPostHandler = () => {
        const text = textareaValue.current?.value
        if(!text) return
        dispatch(addPost())
    }

    const valueHandler = () => {
        const text = textareaValue.current?.value
        if(!text) return
        dispatch(updatePostBody(textareaValue.current?.value))

    }

    return (
        <div className={styles.posts}>
            My posts
            <div>
                <textarea ref={textareaValue} value={textAreaValue} onChange={valueHandler}/>
                <button onClick={addNewPostHandler}>Add button</button>
            </div>
            {postsForRender}
        </div>
    );
};

