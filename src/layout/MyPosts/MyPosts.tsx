import React from 'react';
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Posts";
export const MyPosts = () => {
    return (

            <section className="posts">
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add button</button>
                </div>
                <Post postText={"Hello INCUBATOR"} likeCount={12}/>
                <Post postText={"Hello World"} likeCount={15}/>
            </section>
    );
};

