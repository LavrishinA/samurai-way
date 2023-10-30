import React from "react";
import styles from "./Message.module.css";

type MessagePropsType = {
    id?: string
    msgText: string
}


export const Message: React.FC<MessagePropsType> = ({msgText}) => {
    return (
        <span className={styles.message}>
            {msgText}
        </span>
    );
};
