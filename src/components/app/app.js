// @flow
import React from "react";
import "./app.css";
import Home from "../home";
import About from "../about";
import Tales from "../tale";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { GlobalHeader } from "../global-header/global-header";

function App() {
    return (
        <Router>
            <div>
                <GlobalHeader/>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */ }
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/tales">
                        <Tales/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
