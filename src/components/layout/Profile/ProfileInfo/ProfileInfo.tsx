import React from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <figure>
                <img className={styles.homepageBcg}
                     src="https://media.istockphoto.com/id/1001618062/photo/rusty-background.webp?b=1&s=170667a&w=0&k=20&c=KRhqpP1aqkTHZ6lvIlEMOLXA5s3rlrfPchD_cOfUKYw="
                     alt=""/>
            </figure>
            <div className={styles.about}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;