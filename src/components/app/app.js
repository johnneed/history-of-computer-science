// @flow
import React from "react";
import "./app.css";
import Home from "../home";
import About from "../about";
import Articles from "../articles";
import type TimeLineEvent from "../../models/time-line-event";
import Modal from "../modal";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { GlobalHeader } from "../global-header/global-header";
import Timeline from "../timeline";

type PropsType = { startYear: number, endYear: number, events: { [string]: TimeLineEvent } };

function App({ startYear, endYear, events }: PropsType): React$Element<any> {
    return (
        <Router>
            <div className={ "app_layout" }>
                <div className={ "app_layout-header-container" }>
                    <GlobalHeader/>
                </div>
                <div className={ "app_layout-main-container" }>
                    <Timeline startYear={ startYear } endYear={ endYear } events={ events }/>
                </div>
            </div>
            <Modal>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/articles">
                        <Articles/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Modal>
        </Router>
    );
}

export default App;
