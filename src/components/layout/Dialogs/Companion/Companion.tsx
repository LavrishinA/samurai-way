import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Companion.module.css"

type CompanionPropsType = {
    name: string
    id: string
}

export const Companion: React.FC<CompanionPropsType> = ({name, id}) => {
    let path = `/dialogs/${id}`
    return (
        <li className={`${styles.companion}`}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
};