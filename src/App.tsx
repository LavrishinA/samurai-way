import React from 'react';
import './App.css';
import {Header} from "./components/layout/Header/Header";
import {Navbar} from "./components/layout/Navbar/Navbar";
import {Profile} from "./components/layout/Profile/Profile";
import {Route} from "react-router-dom";
import Settings from "./components/layout/Settings/Settings";
import Music from "./components/layout/Music/Music";
import News from "./components/layout/News/News";
import {DialogsContainer} from "./components/layout/Dialogs/DialogsContainer";


function App() {

    return (

        <div className="container">
            <Header/>
            <Navbar/>
            <main className="main">

                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </main>

        </div>


    );
}

export default App;
