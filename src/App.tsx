import React from 'react';
import './App.css';
import {Header} from "./components/layout/Header/Header";
import {Navbar} from "./components/layout/Navbar/Navbar";
import {Profile} from "./components/layout/Profile/Profile";
import {Dialogs} from "./components/layout/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import Settings from "./components/layout/Settings/Settings";
import Music from "./components/layout/Music/Music";
import News from "./components/layout/News/News";
import {Actions, State} from "./redux/state";


type AppState = {
    data: State
    dispatch: (action: Actions) => void
}

function App({data, dispatch}: AppState) {
    return (

            <div className="container">
                <Header/>
                <Navbar/>
                <main className="main">

                    <Route path="/profile" render={() => <Profile profileState={data.profilePage} dispatch={dispatch}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsState={data.messagesPage} dispatch={dispatch}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </main>

            </div>


    );
}

export default App;
