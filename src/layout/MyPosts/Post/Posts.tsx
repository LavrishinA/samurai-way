import React, {FC} from 'react';
import styles from "./Post.module.css";

type PostType = {
    postText: string
    likeCount: number
}
export const Post: FC<PostType>  = (props) => {
    return (
        <article className={styles.item}>
            <img className={styles.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbRzrv47gqZafyEly4QgNKoHcOPSuHYqp-g&usqp=CAU"/>
            <div>
                <p>{props.postText}</p>
                <span>{`Like ${props.likeCount}`}</span>
            </div>
        </article>
    );
};

