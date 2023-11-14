import React from 'react';
import {Post} from "./Post/Posts";
import {Posts} from "./MyPostsContainer";
import styles from "./MyPosts.module.css"


export const MyPosts = ({profilePage, onAddPost, onUpdateText}: Posts) => {
    const {posts, textAreaValue} = profilePage
    const textareaValue = React.createRef<HTMLTextAreaElement>()

    const postsForRender = posts.map(p => <Post postText={p.postText} likeCount={p.likeCount}/>)

    const addPostHandler = () => {
        onAddPost()
    }

    const updateTextHandler = () => {
        const text = textareaValue.current?.value
        if (!text) return
        onUpdateText(text)

    }

    return (
        <div className={styles.posts}>
            My posts
            <div>
                <textarea ref={textareaValue} value={textAreaValue} onChange={updateTextHandler}/>
                <button onClick={addPostHandler}>Add button</button>
            </div>
            {postsForRender}
        </div>
    );
};

