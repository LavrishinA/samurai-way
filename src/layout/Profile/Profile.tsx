import React from 'react';
import {MyPosts} from "../MyPosts/MyPosts";
import styles from "./Profile.module.css"

export const Profile = () => {
    return (
        <>
            <figure>
                <img className={styles.homepageBcg}
                     src="https://media.istockphoto.com/id/1001618062/photo/rusty-background.webp?b=1&s=170667a&w=0&k=20&c=KRhqpP1aqkTHZ6lvIlEMOLXA5s3rlrfPchD_cOfUKYw="
                     alt=""/>
            </figure>
            <section className="about">
                ava + description
            </section>
            <MyPosts/>
        </>
    );
};

