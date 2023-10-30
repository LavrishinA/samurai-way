import './index.css';
import {State, store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


export function renderEntireTree(state: State) {
    ReactDOM.render(
        <BrowserRouter>
            <App data={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())
store.subscriber(renderEntireTree)
