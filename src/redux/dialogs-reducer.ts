import {Actions} from "./store";

export type Companions = {
    id: string
    name: string
}
export type Messages = {
    id: string
    msgText: string
}
export type MessagesPage = {
    messages: Messages[]
    companions: Companions[]
    messageBody: string
}

const initialState: MessagesPage = {
    messages: [
        {id: "1", msgText: "Hi"},
        {id: "2", msgText: "I am from incubator"},
        {id: "3", msgText: "Let go..."}]
        ,
        companions: [
        {id: "1", name: "Yana"},
        {id: "2", name: "Maks"},
        {id: "3", name: "Sasha"},
        {id: "4", name: "Renato"},
        {id: "5", name: "Michela"},
        {id: "6", name: "Vika"},
    ],
        messageBody: "asd"
}

export function dialogsReducer(state: MessagesPage = initialState, action: Actions): MessagesPage {
    switch (action.type) {
        case  "SEND-MESSAGE":
            const newMessage = {
                id: String(new Date().getMilliseconds()),
                msgText: state.messageBody
            }
            return {...state, messages: [ ...state.messages, newMessage], messageBody: ""}
        case "UPDATE-MESSAGE-BODY":
            state.messageBody = action.payload.messageText
            return {...state, messageBody: state.messageBody}
        default:
            return state
    }
}

export type sendMessage = ReturnType<typeof sendMessage>
export type updateMessageBody = ReturnType<typeof updateMessageBody>


export function sendMessage() {
    return {
        type: "SEND-MESSAGE",
    } as const
}

export function updateMessageBody(messageText: string) {
    return {
        type: "UPDATE-MESSAGE-BODY",
        payload: {
            messageText
        }
    } as const
}