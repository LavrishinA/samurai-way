import React from 'react';
import './App.css';
import {Header} from "./layout/Header/Header";
import {Navbar} from "./layout/Navbar/Navbar";
import {Profile} from "./layout/Profile/Profile";
import {Dialogs} from "./layout/Dialogs/Dialogs";

function App() {
    return (
        <div className="container">
            <Header/>
            <Navbar/>
            <div className="main">
                {/*<Profile/>*/}
                <Dialogs/>
            </div>

        </div>

    );
}

export default App;
