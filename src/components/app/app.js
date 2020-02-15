// @flow
import React from "react";
import "./app.css";
import Home from "../home";
import About from "../about";
import Articles from "../articles";
import type TimeLineEvent from "../../models/time-line-event";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { GlobalHeader } from "../global-header/global-header";

type PropsType = { startYear: number, endYear: number, events: { [string]: TimeLineEvent } };

function App({ startYear, endYear, events }: PropsType): React$Element<any> {
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
                    <Route path="/articles">
                        <Articles/>
                    </Route>
                    <Route path="/">
                        <Home startYear={ startYear } endYear={ endYear } events={ events }/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
