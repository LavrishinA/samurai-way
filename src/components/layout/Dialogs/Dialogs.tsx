import React, {ChangeEvent} from "react";
import {Companion} from "./Companion/Companion";
import {Message} from "./Message/Message";
import styles from "./Dialogs.module.css"
import {Actions, Companions, Messages} from "../../../redux/state";
import {sendMessage, updateMessageBody} from "../../../redux/dialogs-reducer";

type DialogsState = {
    dialogsState: {
        companions: Companions[]
        messages: Messages[]
        messageBody: string
    }
    dispatch: (action: Actions) => void
}


export const Dialogs = ({dialogsState, dispatch}: DialogsState) => {

    const textAreaValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        dispatch(updateMessageBody(text))
    }

    const sendMessageValueHandler = () => {
        dispatch(sendMessage())
    }
    const companionElements = dialogsState.companions.map(c => <Companion name={c.name} id={c.id}/>)
    const companionMessages = dialogsState.messages.map(ms => <Message msgText={ms.msgText}/>)

    return (
        <section className={styles.dialogs}>
            <ul className={styles.companions}>
                {companionElements}
            </ul>
            <section className={styles.messages}>
                {companionMessages}
                <div>
                    <textarea value={dialogsState.messageBody} onChange={textAreaValueHandler} ></textarea>
                    <button onClick={sendMessageValueHandler}>Send message</button>
                </div>
            </section>

        </section>
    );
};
