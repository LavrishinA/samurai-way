import {Actions, MessagesPage} from "./state";


export function dialogsReducer(state: MessagesPage, action: Actions) {
    switch (action.type) {
        case  "SEND-MESSAGE":
            const newMessage = {
                id: String(new Date().getMilliseconds()),
                msgText: state.messageBody
            }
            state.messages.push(newMessage)
            state.messageBody = ""
            return state
        case "UPDATE-MESSAGE-BODY":
            state.messageBody = action.payload.messageText
            return state
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