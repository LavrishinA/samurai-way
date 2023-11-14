import React, {ChangeEvent} from "react";
import {Companion} from "./Companion/Companion";
import {Message} from "./Message/Message";
import styles from "./Dialogs.module.css"
import {Dialog} from "./DialogsContainer";


export const Dialogs = ({messagesPage, onUpdateText, onAddMessage}: Dialog) => {
    const {companions, messages, messageBody} = messagesPage
    const textAreaValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        onUpdateText(text)
    }

    const sendMessageValueHandler = () => {
        onAddMessage()
    }
    const companionElements = companions.map(c => <Companion key={c.id} name={c.name} id={c.id}/>)
    const companionMessages = messages.map(ms => <Message key={ms.id} msgText={ms.msgText}/>)

    return (
        <section className={styles.dialogs}>
            <ul className={styles.companions}>
                {companionElements}
            </ul>
            <section className={styles.messages}>
                {companionMessages}
                <div>
                    <textarea value={messageBody} onChange={textAreaValueHandler}></textarea>
                    <button onClick={sendMessageValueHandler}>Send message</button>
                </div>
            </section>

        </section>
    );
};
