import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {Store} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {MessagesPage, sendMessage, updateMessageBody} from "../../../redux/dialogs-reducer";


type MapStateToProps = {
    messagesPage: MessagesPage
}
type MapDispatchToProps = {
    onUpdateText: (text: string) => void
    onAddMessage: () => void
}
export type Dialog = MapStateToProps & MapDispatchToProps;


const mapStateToProps = (state: Store): MapStateToProps => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onUpdateText: (message: string) => dispatch(updateMessageBody(message)),
        onAddMessage: () => dispatch(sendMessage())
    }

}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)